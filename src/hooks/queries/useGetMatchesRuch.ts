import { useQuery } from '@tanstack/react-query';
import { apiService } from '@/services';

export const useGetMatchesRuch = () => {
  const res = useQuery({queryKey: ['matches-ruch'], queryFn: () => apiService.getMatchesRuch()})
  console.log(res)
  return res
}