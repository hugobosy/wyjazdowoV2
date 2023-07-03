import axios from "axios";

export class ApiService {
    constructor() {
    }

    async getUser() {
        try {
            const res =  await axios.get('https://licznik.wyjazdowo.eu/api/users');
            return res.data.data

        } catch (err) {
            return err;
        }
    }

}

export const apiService = new ApiService();