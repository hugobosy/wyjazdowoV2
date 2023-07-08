import axios from 'axios';
import { getAccessTokenCookie } from '@/utils/cookie';

export class ApiService {
  constructor() {
  }

  async getUser(page = 1) {
    try {
      // const res = await axios.get('https://licznik.wyjazdowo.eu/api/users', {params: {page: page}});
      const res = await axios.get('http://localhost:3001/users', {
        headers: {
          Authorization: `Bearer ${getAccessTokenCookie()}`
        }
      })
      console.log(res.data);
      return res.data[0];

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

  async login(data: any) {
    try {
      const res = await axios.post(`http://localhost:3001/login/${data.login}`, data)
      return res.data
    } catch (err) {
      console.log(err);
    }
  }

  async setDrive(data: any) {
    try {
      console.log(data);
      return await axios.post('https://licznik.wyjazdowo.eu/api/add-km/220', data)
    } catch (err) {
      console.log(err);
    }
  }

}

export const apiService = new ApiService();