import Head from 'next/head';
import Image from 'next/image';
import { Inter } from 'next/font/google';
import styles from '@/styles/Home.module.css';
import { useGetUser } from '@/hooks/queries/useGetUser';
import axios from 'axios';
import { SyntheticEvent, useState } from 'react';
import { useRegisterMutation } from '@/hooks/mutations/useRegisterMutation';

const inter = Inter({ subsets: ['latin'] });

export default function Home() {
  const { data: user, isLoading: userIsLoading } = useGetUser();
  const { mutate: onRegister } = useRegisterMutation();
  const [register, setRegister] = useState({
    login: '',
    email: '',
    password: '',
  });
  //   const res = axios.get('https://licznik.wyjazdowo.eu/api/users');

  const handleRegister = (e: SyntheticEvent) => {
    e.preventDefault();
    onRegister(register, {onSuccess: () => {
        console.log('success');
      },
    onError: (res) => {
      console.log(res);
    }})
  };

  return (
    <>
      <h3>Lista uzytkowników</h3>
      <ul>
        {!userIsLoading && user.map((user: any, index: number) => <li key={index}>{user.login}</li>)}
      </ul>

      <h3>Rejestracja</h3>
      <fieldset>
        <form>
          <label htmlFor='login'>Login: </label>
          <input type='text' value={register.login} onChange={e => setRegister({ ...register, login: e.target.value })}
                 id='login' />
          <br />
          <label htmlFor='email'>Email: </label>
          <input type='text' value={register.email} onChange={e => setRegister({ ...register, email: e.target.value })}
                 id='email' /> <br />
          <label htmlFor='password'>Hasło: </label>
          <input type='password' value={register.password}
                 onChange={e => setRegister({ ...register, password: e.target.value })}
                 id='password' />
          <br />
          <button type='submit' onClick={handleRegister}>Rejestracja</button>
        </form>
      </fieldset>
    </>
  );
}
