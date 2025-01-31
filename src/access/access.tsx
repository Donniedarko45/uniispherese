import axios from "axios";

export const authAxios = axios.create({
    baseURL:'https://uniisphere-1.onrender.com',
    headers: {
        'Content-Type': 'application/json'
      }
})
// process.env.REACT_APP_API_URL