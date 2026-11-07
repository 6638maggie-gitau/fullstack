import { useState } from "react";
import Mpesa from "../components/Mpesa"
import Footer from "../components/Footer"
const Booking = () => {
  const [formData, setFormData] = useState({
        
          Name: "",
          email: "",
          guests: "",
          phone: "",
          specialguests: "",
        });

        const [error, setError] = useState("");

const handleChange = (e) => {
  setFormData({ ...formData, [e.target.name]: e.target.value });
};
const[checkIn, setCheckIn]= useState("");
const[checkOut, setCheckOut]= useState("");
const[guests, setGuests]= useState("2");

const today = new Date().toISOString().split("T")[0];

const inputClass = "w-full rounded-full border-stone-300 bg-stone-200/60 px-5 py-3 text-slate-700 outline none focus:ring-2 focus-ring-teal-700"

const handleSubmit = (e) => {
  e.preventDefault();
  console.log({ checkIn, checkOut,guests});
  if (formData.password !== formData.confirmPassword) {
    setError("Passwords do not match!");
    return;
  }
  setError("");
  console.log("Form Submitted", formData);
  // Add API request to handle signup
 
};
    return(
        <section className="py-16 bg-gray-100">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-4xl font-semibold mb-6">Book your stay</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 px-6">
            {[
              { title: "Treetop suite",amount:"7000/night" },
              { title: "Luxury suite", amount: "6000/night" },
              {
                title: "Airbnb",
                amount: "3500/night",
              },
            ].map((BookingPage, index) => (
              <div
                key={index}
                className="bg-white shadow-lg rounded-lg p-6 text-center transform transition duration-300 hover:scale-105 hover:shadow-xl"
              >
                <h3 className="text-2xl font-semibold mb-2">{BookingPage.title}</h3>
                <p className="text-gray-500">{BookingPage.amount}</p>
                
              </div>
            ))}
          </div>
        </div>
      

     

    
    <div className="max-w-7xl mx-auto text-center ">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 px-6">
       
        {error && <p className="text-red-600 text-sm mb-4">{error}</p>}
        <form onSubmit={handleSubmit}>
            <div className="mb-4">
            <label className="block text-gray-700">Check-in</label>
            <input
              type="date"
              min={today}
              value={formData.CheckIn}
              onChange={(e) => setCheckIn(e.target.value)}
              required
              className={inputClass}
              placeholder="name"
            />
            </div>
             <div className="mb-4">
            <label className="block text-gray-700">Check-out</label>
            <input
              type="date"
              min={checkIn || today}
              value={formData.CheckOut}
              onChange={(e) => setCheckOut(e.target.value)}
              required
              className={inputClass}/>
          </div>

          
          < Field label="Guests" htmlFor="guests">
            <select
              id="guests"
              value={guests}
              onChange={(e) => setGuests(e.target.value)}
              required
              className={inputClass}>
              {[1,2,3,4,5,6].map((n) => (
                <option key={n}>{n} {n === 1 ? "guest" : "guests"} </option>
              ))}
            </select>
          </Field>

          <div className="mb-4">
            <label className="block text-gray-700">Name</label>
            <input
              type="text"
              name="Name"
              value={formData.Name}
              onChange={handleChange}
              required
              className="w-full px-4 py-2 mt-1 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
              placeholder="name"
            />
          </div>
          
          <div className="mb-4">
            <label className="block text-gray-700">Phone number</label>
            <input
              type="phone number"
              name="phone number"
              value={formData.phonenumber}
              onChange={handleChange}
              required
              className="w-full px-4 py-2 mt-1 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
              placeholder="Enter your phone number"
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700">Email</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              className="w-full px-4 py-2 mt-1 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
              placeholder="Enter your phone email"
            />
          </div>
          <button  type="submit" className="rounded-full bg-teal-900 px-8 py-4 font-semibold text-white transition hover:bg-teal-800 focus:outline-none focus:ring-2 focus:ring-teal-700 focus:ring-offset-2 md:whitespace-nowrap">
            Check availability
          </button>
          </form>
        </div>
        </div>
        <Mpesa/>
        <Footer/>
        </section>
    );

};
function Field({ label,htmlFor, children}) {
  return (
    <div className="flex-1">
      <label htmlFor={htmlFor} className="mb-2 block text-sm font-semibold uppercase tracking-wide text-slate-700 ">
        {label}
      </label>
      {children}
    </div>
  )
}
export default Booking;

