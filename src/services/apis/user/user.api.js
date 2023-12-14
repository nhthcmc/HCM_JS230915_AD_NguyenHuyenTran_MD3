import axios from "axios";

export default {
    findAll: async () => {
        console.log("i",import.meta.env.SERVER_HOST);
        return await axios.get(`http://127.0.0.1:3000/users`)
    },
    create: async (data) => {
        return await axios.post(`http://127.0.0.1:3000/users`, data)
    },
    update: async (userId, data) => {
        return await axios.patch(`http://127.0.0.1:3000/users/${userId}`, data)
    },
    delete: async (userId) => {
        return await axios.delete(`http://127.0.0.1:3000/users/${userId}`)
    }
}