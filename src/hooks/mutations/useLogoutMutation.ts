import { useMutation } from '@tanstack/react-query';
import { apiService } from '@/services';

export const useLogoutMutation = (id: string) => {
  return useMutation(apiService.logout)
}