import axios from 'axios';

export class ApiService {
  constructor() {
  }

  async getUser(page = 1) {
    try {
      const res = await axios.get('https://licznik.wyjazdowo.eu/api/users', {params: {page: page}});
      console.log(res);
      return res.data.data;

    } catch (err) {
      return err;
    }
  }

  async register(data: any) {
    try {
      console.log(data);
      return await axios.post('https://licznik.wyjazdowo.eu/api/users/register', data, {
        headers: {
          'Content-Type': "application/json"
        }
      });
    } catch (err) {
      return err;
    }
  }

}

export const apiService = new ApiService();