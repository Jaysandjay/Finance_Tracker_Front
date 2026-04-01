import applyCaseMiddleware from "axios-case-converter";
import axios from "axios";

const client = applyCaseMiddleware(axios.create({
    baseURL: import.meta.env.VITE_API_URL,
    withCredentials: true,
    headers: {
        'Content-Type': 'application/json'
    }
}))

export default client