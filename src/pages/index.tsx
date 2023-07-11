import { useGetUser } from '@/hooks/queries/useGetUser';
import { SyntheticEvent, useState } from 'react';
import { useRegisterMutation } from '@/hooks/mutations/useRegisterMutation';
import { useSetDrive } from '@/hooks/mutations/useSetDrive';
import Link from 'next/link';
import { PROJECT_URL } from '@/const/projectUrl';

export default function Home() {
  const { data: user, isLoading: userIsLoading } = useGetUser();
  const { mutate: onRegister, isLoading: registerLoading, isError: registerError } = useRegisterMutation();

  const { mutate: onSetDrive } = useSetDrive();
  const [register, setRegister] = useState({
    login: '',
    email: '',
    password: '',
  });



  const [drive, setDrive] = useState({
    street: '',
    house: '',
    zip: '',
    city: '',
  });

  const [km, setKm] = useState('');
  //   const res = axios.get('https://licznik.wyjazdowo.eu/api/users');

  const handleRegister = async (e: SyntheticEvent) => {
    e.preventDefault();
    onRegister(register, {
      onSuccess: () => {
        console.log('success');
      },
      onError: (res) => {
        console.log(res);
      },
    });
  };

  const handleDrive = (e: SyntheticEvent) => {
    e.preventDefault();
    onSetDrive(km, { onSuccess: () => console.log('Km dodane') });
  };

  return (
    <>
      <h3>Lista uzytkowników</h3>
      {user?.response?.status === 403 ? <h1>Brak autoryzacji</h1> : <ol>
        {!userIsLoading && user.map((user: any, index: number) => <li key={index}>{user.login}</li>)}
      </ol>}

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

      <Link href={PROJECT_URL.login} >Zaloguj</Link>


      <h3>Dodaj trasę</h3>
      <fieldset>
        <form>
          {/*<label htmlFor='street'>Adres: </label>*/}
          {/*<input type='text' value={drive.street} onChange={e => setDrive({ ...drive, street: e.target.value })}*/}
          {/*       id='authLogin' />*/}
          {/*<br />*/}
          {/*<label htmlFor='street'>Numer: </label>*/}
          {/*<input type='text' value={drive.house} onChange={e => setDrive({ ...drive, house: e.target.value })}*/}
          {/*       id='authLogin' />*/}
          {/*<br />*/}
          {/*<label htmlFor='street'>Kod pocztowy: </label>*/}
          {/*<input type='text' value={drive.zip} onChange={e => setDrive({ ...drive, zip: e.target.value })}*/}
          {/*       id='authLogin' />*/}
          {/*<br />*/}
          {/*<label htmlFor='street'>Miasto: </label>*/}
          {/*<input type='text' value={drive.city} onChange={e => setDrive({ ...drive, city: e.target.value })}*/}
          {/*       id='authLogin' />*/}
          {/*<br />*/}

          <label htmlFor='km'>Km: </label>
          <input type='text' value={km} onChange={e => setKm(e.target.value)}
                 id='km' />
          <br />
          <button type='submit' onClick={handleDrive}>Dodaj trasę</button>
        </form>
      </fieldset>
    </>
  );
}
