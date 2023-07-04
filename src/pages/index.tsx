import { useGetUser } from '@/hooks/queries/useGetUser';
import { SyntheticEvent, useState } from 'react';
import { useRegisterMutation } from '@/hooks/mutations/useRegisterMutation';
import { useLoginMutation } from '@/hooks/mutations/useLoginMutation';

export default function Home() {
  const { data: user, isLoading: userIsLoading } = useGetUser();
  const { mutate: onRegister, isLoading: registerLoading, isError: registerError } = useRegisterMutation();
  const { mutate: onLogin } = useLoginMutation();
  const [register, setRegister] = useState({
    login: '',
    email: '',
    password: '',
  });

  const [login, setLogin] = useState({
    login: '',
    password: '',
  });
  //   const res = axios.get('https://licznik.wyjazdowo.eu/api/users');

  const handleRegister = (e: SyntheticEvent) => {
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

  const handleLogin = (e: SyntheticEvent) => {
    e.preventDefault();
    onLogin(login)
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

      <h3>Rejestracja</h3>
      <fieldset>
        <form>
          <label htmlFor='authLogin'>Login: </label>
          <input type='text' value={login.login} onChange={e => setLogin({ ...login, login: e.target.value })}
                 id='authLogin' />
          <br />
          <label htmlFor='authPassword'>Hasło: </label>
          <input type='password' value={login.password}
                 onChange={e => setLogin({ ...login, password: e.target.value })}
                 id='authPassword' />
          <br />
          <button type='submit' onClick={handleLogin}>Zaloguj</button>
        </form>
      </fieldset>
    </>
  );
}
