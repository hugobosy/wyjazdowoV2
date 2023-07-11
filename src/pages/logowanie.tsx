import { useLoginMutation } from '@/hooks/mutations/useLoginMutation';
import { SyntheticEvent, useState } from 'react';
import { useRouter } from 'next/router';

export default function Login() {
  const { mutate: onLogin } = useLoginMutation();
  const router = useRouter();

  const [login, setLogin] = useState({
    login: '',
    password: '',
  });

  const handleLogin = (e: SyntheticEvent) => {
    e.preventDefault();
    onLogin(login, { onSuccess: (res) => console.log(res) });
    router.push('/');
  };

  return (
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
  )
}