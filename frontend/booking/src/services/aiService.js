import axios from "axios";

const AI_API = "http://127.0.0.1:8000/api/ai/chat/";

export const sendAIMessage = async (messages) => {

    const token = localStorage.getItem("access");

    const response = await axios.post(
        AI_API,
        { messages },
        {
            headers: token
                ? { Authorization: `Bearer ${token}` }
                : {}
        }
    );

    return response.data;
};