import {useQuery} from "@tanstack/react-query";
import {apiService} from "@/services";

export const useGetUser = () => useQuery({queryKey: ['get-user'], queryFn: () => apiService.getUser()})