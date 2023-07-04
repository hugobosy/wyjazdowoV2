import { useMutation } from '@tanstack/react-query';
import { apiService } from '@/services';

export const useSetDrive = () => {
  return useMutation(apiService.setDrive)
}