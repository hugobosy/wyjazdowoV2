import { useMutation } from '@tanstack/react-query';
import { apiService } from '@/services';

export const useLoginMutation = () => {
  return useMutation(apiService.login)
}