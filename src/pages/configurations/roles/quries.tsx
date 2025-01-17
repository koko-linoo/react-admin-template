import { roleKeys } from "@/configs/queryKeys";
import { useParamsHelper } from "@/hooks/useParamHelper";
import { createRole, getRoles } from "@/services/role.service";
import { notifications } from "@mantine/notifications";
import { IconCheck } from "@tabler/icons-react";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";

export function useGetRoles() {
  const { getParam } = useParamsHelper();

  const query = {
    search: getParam("search") ?? undefined,
    page: getParam("page") ?? undefined,
  };

  return useQuery({
    queryKey: roleKeys.listFilter(JSON.stringify(query)),
    queryFn: () => getRoles(query),
    select: (data) => data.data,
  });
}

export function useCreateRole() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (values: Record<string, unknown>) => createRole(values),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: roleKeys.all });

      notifications.show({
        icon: <IconCheck size={16} />,
        id: "role-created",
        color: "green",
        title: "Success",
        message: "Role created successfully",
      });
    },
  });
}
