import { useMutation } from '@tanstack/react-query';
import { apiService } from '@/services';
import { setAccessTokenCookie } from '@/utils/cookie';

export const useLoginMutation = () => {
  return useMutation(apiService.login, {
    onSuccess: (res) => {
      setAccessTokenCookie(res.token);
    },
    onError: (res) => {
      // @ts-ignore
      if(res.data.status === 401) {
        alert('Nieprawidłowy login lub hasło')
      } else {
        alert('Nieznany błąd')
      }
    }
  })
}