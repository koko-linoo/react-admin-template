import { userKeys } from "@/configs/queryKeys";
import { useParamsHelper } from "@/hooks/useParamHelper";
import { createUser, getUsers, updateUser } from "@/services/user.service";
import { notifications } from "@mantine/notifications";
import { IconCheck } from "@tabler/icons-react";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";

export function useGetUsers() {
  const { getParam } = useParamsHelper();

  const query = {
    search: getParam("search") ?? undefined,
    page: getParam("page") ?? undefined,
  };

  return useQuery({
    queryKey: userKeys.listFilter(JSON.stringify(query)),
    queryFn: () => getUsers(query),
    select: (data) => data.data,
  });
}

export function useCreateUser() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (values: Record<string, unknown>) => createUser(values),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: userKeys.all });

      notifications.show({
        icon: <IconCheck size={16} />,
        id: "user-created",
        color: "green",
        title: "Success",
        message: "User created successfully",
      });
    },
  });
}

export function useUpdateUser() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (values: Record<string, unknown>) =>
      updateUser(values.id as string, values),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: userKeys.all });

      notifications.show({
        icon: <IconCheck size={16} />,
        id: "user-updated",
        color: "green",
        title: "Success",
        message: "User Updated successfully",
      });
    },
  });
}
