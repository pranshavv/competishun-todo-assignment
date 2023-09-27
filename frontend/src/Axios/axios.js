import axios from "axios"
const instance = axios.create({
    baseURL:"competishun-todo-assignment.vercel.app"
})
export default instance
