import { useMutation } from '@tanstack/react-query';
import { apiService } from '@/services';

export const useRegisterMutation = () => {
  return useMutation(apiService.register);
}