import { userKeys } from "@/configs/queryKeys";
import { getUsers } from "@/services/user.service";
import { useQuery } from "@tanstack/react-query";

export function useGetUsers() {
  return useQuery({
    queryKey: userKeys.lists(),
    queryFn: () => getUsers(),
    select: (data) => data.data,
  });
}
