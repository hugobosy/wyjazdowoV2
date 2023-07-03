import axios from "axios";

export class ApiService {
    constructor() {
    }

    async getUser() {
        try {
            const res =  await axios.get('licznik.wyjazdowo/api/users');
            console.log(res)
            return res

        } catch (err) {
            return err;
        }
    }

}

export const apiService = new ApiService();