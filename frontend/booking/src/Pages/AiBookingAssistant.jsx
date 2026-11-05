import { useState } from "react";
import { sendAIMessage } from "../services/aiService";

function AIBookingAssistant() {

    const [open, setOpen] = useState(false);
    const [message, setMessage] = useState("");
    const [loading, setLoading] = useState(false);

    const [messages, setMessages] = useState([
        {
            role: "assistant",
            content:
                "Welcome to Mombasa Coastal Stays! 🌴 I can help you find villas, check availability and plan your stay. How can I help?"
        }
    ]);

    const handleSend = async () => {

        if (!message.trim() || loading) return;

        const userMessage = {
            role: "user",
            content: message.trim()
        };

        const updatedMessages = [
            ...messages,
            userMessage
        ];

        setMessages(updatedMessages);
        setMessage("");
        setLoading(true);

        try {

            const data = await sendAIMessage(
                updatedMessages
            );

            setMessages([
                ...updatedMessages,
                {
                    role: "assistant",
                    content: data.reply
                }
            ]);

        } catch (error) {

            setMessages([
                ...updatedMessages,
                {
                    role: "assistant",
                    content:
                        "Sorry, I couldn't process your request. Please try again."
                }
            ]);

        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="fixed bottom-5 right-5 z-50">

            {open && (

                <div className="w-350px sm:w-[400px] h-[520px] bg-white shadow-2xl rounded-2xl flex flex-col overflow-hidden">

                    {/* Header */}

                    <div className="bg-emerald-900 text-white p-4">

                        <h2 className="font-bold text-lg">
                            Mombasa Coastal Stays
                        </h2>

                        <p className="text-sm text-emerald-100">
                            AI Booking Assistant
                        </p>

                    </div>

                    {/* Chat messages */}

                    <div className="flex-1 overflow-y-auto p-4 space-y-3">

                        {messages.map((item, index) => (

                            <div
                                key={index}
                                className={`p-3 rounded-xl max-w-[85%] whitespace-pre-wrap ${
                                    item.role === "user"
                                        ? "bg-emerald-100 ml-auto"
                                        : "bg-gray-100 mr-auto"
                                }`}
                            >
                                {item.content}
                            </div>

                        ))}

                        {loading && (
                            <p className="text-sm text-gray-500">
                                Finding the best villas for you...
                            </p>
                        )}

                    </div>

                    {/* Input */}

                    <div className="p-3 border-t flex gap-2">

                        <input
                            value={message}
                            onChange={(e) =>
                                setMessage(e.target.value)
                            }
                            onKeyDown={(e) => {
                                if (e.key === "Enter") {
                                    handleSend();
                                }
                            }}
                            placeholder="Find a villa..."
                            className="flex-1 min-w-0 border rounded-xl px-3 py-2"
                            disabled={loading}
                        />

                        <button
                            onClick={handleSend}
                            disabled={loading || !message.trim()}
                            className="bg-emerald-900 text-white px-4 rounded-xl disabled:opacity-50"
                        >
                            Send
                        </button>

                    </div>

                </div>
            )}

            {/* Floating button */}

            <button
                onClick={() => setOpen(!open)}
                className="mt-3 bg-emerald-900 text-white px-6 py-4 rounded-full shadow-xl"
            >
                {open ? "Close Chat" : "💬 Find a Villa"}
            </button>

        </div>
    );
}

export default AIBookingAssistant;