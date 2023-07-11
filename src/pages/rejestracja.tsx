import { SyntheticEvent, useState } from 'react';
import { useRegisterMutation } from '@/hooks/mutations/useRegisterMutation';

export default function Register() {
  const { mutate: onRegister, isLoading: registerLoading, isError: registerError } = useRegisterMutation();

  const [register, setRegister] = useState({
    login: '',
    email: '',
    password: '',
  });

  const [error, setError] = useState('')

  const handleRegister = async (e: SyntheticEvent) => {
    e.preventDefault();
    onRegister(register, {
      onSuccess: (res: any) => {
        console.log(res.response.status);
        if(res.response.status === 401) {
          setError('Login lub email istnieje juz w bazie')
          return
        }
        setError('')
      },
      onError: (res) => {
        console.log(res);
      },
    });
  };
  return (
    <>
      <h3>Rejestracja</h3>
      {error && <p>{error}</p>}
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