import axios from "axios";

// default baseURL of API
// main used api path
const instance = axios.create({
    baseURL: "http://localhost:3000",
    headers: {
        "Accept": "application/json",
        "Content-Type": "application/json"
    }
})

export default instance;