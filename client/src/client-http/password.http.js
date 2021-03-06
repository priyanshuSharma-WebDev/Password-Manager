import axios from "axios";
const isProd = false
export const apiURL = isProd ? "http://133.209.147.247/api" : "http://localhost:5000/api"

// eslint-disable-next-line
export default {
    addNewPassword: async (payload) => {
        try {
            console.log(payload)
            const res = await axios.post(`${apiURL}/passwords/addNewPassword`, {
                payload
            });
            console.log("res: ", res);
            window.location.reload();
        }
        catch (e) {
            console.error(e);
        }
    },
    getAllPasswords: async () => {
        try {
            const res = await axios.get(`${apiURL}/passwords/getAllPasswords`);
            return res.data;
        }
        catch (e) {
            console.error(e);
        }
    },
    decryptPassword: async (encryption) => {
        try {
            const res = await axios.post(`${apiURL}/passwords/decryptPassword`, { encryption });
            return res.data;
        }
        catch (e) {
            console.error(e);
        }
    },
    deleteRecord: async (id) => {
        try {
            const res = await axios.delete(`${apiURL}/passwords/deleteRecord`, {
                data: {
                    id: id
                }
            })
            if (res.status === 500) {
                throw new Error(res.data);
            }
            return res.data;
        }
        catch (e) {
            console.error(e);
        }
    },
    editRecord: async (edit, id) => {
        try {
            const res = await axios.put(`${apiURL}/passwords/updateRecord`, { ...edit, id });
            if (res.status === 500) {
                throw new Error(res.data);
            }
            return res.data;

        } catch (e) {
            console.log(e);
        }
    }
}
