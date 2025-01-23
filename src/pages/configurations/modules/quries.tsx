import { moduleKeys, roleKeys } from "@/configs/queryKeys";
import {
  createModule,
  getModules,
  updateModule,
} from "@/services/module.service";
import { updatePermissions } from "@/services/permission.service";
import { notifications } from "@mantine/notifications";
import { IconCheck } from "@tabler/icons-react";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";

export function useGetModules() {
  return useQuery({
    queryKey: moduleKeys.all,
    queryFn: () => getModules(),
    select: (data) => data.data,
  });
}

export function useCreateModule() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (values: Record<string, unknown>) => createModule(values),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: moduleKeys.all });

      notifications.show({
        icon: <IconCheck size={16} />,
        id: "Module-created",
        color: "green",
        title: "Success",
        message: "Module created successfully",
      });
    },
  });
}

type UpdatePermission = {
  roleId: string;
  permissions: Permission[];
};

export function useUpdatePermissions() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (props: UpdatePermission) =>
      updatePermissions(props.roleId, props.permissions),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: roleKeys.all });

      notifications.show({
        icon: <IconCheck size={16} />,
        id: "Permissions-updated",
        color: "green",
        title: "Success",
        message: "Permissions updated successfully",
      });
    },
  });
}

export function useUpdateModule() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: ({ id, ...values }: Record<string, unknown>) =>
      updateModule(id as string, values),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: moduleKeys.all });

      notifications.show({
        icon: <IconCheck size={16} />,
        id: "Module-updated",
        color: "green",
        title: "Success",
        message: "Module updated successfully",
      });
    },
  });
}
