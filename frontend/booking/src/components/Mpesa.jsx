import { useState, useRef } from "react";
import axios from "axios";

export default function MpesaPay({ bookingId, amount, onSuccess }) {
  const [phone, setPhone] = useState("");
  const [ setAmount] = useState("");
  const [state, setState] = useState("idle"); // idle | waiting | success | failed
  const [message, setMessage] = useState("");
  const timer = useRef(null);

  const poll = (paymentId) => {
    let tries = 0;
    timer.current = setInterval(async () => {
      tries += 1;
      try {
        const { data } = await axios.get(`/api/payments/mpesa/status/${paymentId}/`);
        if (data.status === "SUCCESS") {
          clearInterval(timer.current);
          setState("success");
          setMessage(`Paid. Receipt ${data.receipt}`);
          onSuccess?.(data);
        } else if (data.status === "FAILED") {
          clearInterval(timer.current);
          setState("failed");
          setMessage(data.message || "Payment failed.");
        }
      } catch {
        /* keep polling */
      }
      if (tries >= 20) {
        clearInterval(timer.current);
        setState("failed");
        setMessage("Timed out. If money was deducted, contact us with your M-Pesa message.");
      }
    }, 3000);
  };

  const pay = async (e) => {
    e.preventDefault();
    setState("waiting");
    setMessage("Check your phone and enter your M-Pesa PIN...");
    try {
      const { data } = await axios.post("/api/payments/mpesa/pay/", {
        phone,
        amount,
        booking_id: bookingId,
      });
      poll(data.payment_id);
    } catch (err) {
      setState("failed");
      setMessage(err.response?.data?.error || "Could not start payment.");
    }
  };

  return (
    <form onSubmit={pay} className="space-y-4 rounded-2xl bg-white p-6 shadow">
      <h3 className="text-xl font-bold">Pay KES {amount} with M-Pesa</h3>
      <input
        type="tel"
        value={phone}
        onChange={(e) => setPhone(e.target.value)}
        placeholder="Enter phone number eg 07...."
        required
        disabled={state === "waiting"}
        className="w-full rounded-full border px-5 py-3 outline-none focus:ring-2 focus:ring-green-600"
      />
       <input
        type="amount"
        value={amount}
        onChange={(e) => setAmount(e.target.value)}
        placeholder="Enter amount"
        required
        disabled={state === "waiting"}
        className="w-full rounded-full border px-5 py-3 outline-none focus:ring-2 focus:ring-green-600"
      />
      <button
        disabled={state === "waiting" || state === "success"}
        className="w-full rounded-full bg-green-600 py-3 font-semibold text-white disabled:opacity-50"
      >
        {state === "waiting" ? "Waiting for payment..." : "Pay now"}
      </button>
      {message && (
        <p className={state === "success" ? "text-green-700" : state === "failed" ? "text-red-600" : "text-slate-600"}>
          {message}
        </p>
      )}
    </form>
  );
}
