import axios from "axios"
const instance = axios.create({
    baseURL:"https://todomern-43q3.onrender.com/api"
})
export default instance
