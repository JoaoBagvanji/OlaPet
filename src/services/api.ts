import axios from "axios";

const api = axios.create({
    baseURL: 'http://192.168.18.50:3444'
})

export default api;