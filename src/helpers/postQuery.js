import axios from 'axios';


export const postQuery = async (query) => {
    const url = import.meta.env.VITE_URL_BACKEND;

    try {
        const response = await axios.post(url, query);
        return response.data;
    } catch (error) {
        console.error(`Error sending query to server: ${ error }`);
        return null;
    }
};