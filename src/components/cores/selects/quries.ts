import { roleKeys } from "@/configs/queryKeys";
import { getRoles } from "@/services/role.service";
import { useQuery } from "@tanstack/react-query";

export function useRolesSelect() {
  return useQuery({
    queryKey: roleKeys.lists(),
    queryFn: () => getRoles(),
    select: (data) =>
      data.data?.data?.map((role) => ({ value: role.id, label: role.name })) ??
      [],
  });
}
