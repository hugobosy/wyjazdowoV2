import { useGetUser } from '@/hooks/queries/useGetUser';
import { SyntheticEvent, useState } from 'react';
import { useSetDrive } from '@/hooks/mutations/useSetDrive';
import Link from 'next/link';
import { PROJECT_URL } from '@/const/projectUrl';

export default function Home() {
  const { data: user, isLoading: userIsLoading } = useGetUser();
  const { mutate: onSetDrive } = useSetDrive();

  const [drive, setDrive] = useState({
    street: '',
    house: '',
    zip: '',
    city: '',
  });

  const [km, setKm] = useState('');
  //   const res = axios.get('https://licznik.wyjazdowo.eu/api/users');

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

      <Link href={PROJECT_URL.login} >Zaloguj</Link>
      &nbsp;
      <Link href={PROJECT_URL.register} >Rejestracja</Link>


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
      <Link href={PROJECT_URL.matches.ruch}>Tabela meczy Ruchu</Link>
    </>
  );
}
