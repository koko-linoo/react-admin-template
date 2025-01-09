import { login } from "@/services/auth.service";
import { notifications } from "@mantine/notifications";
import { IconCircleCheck } from "@tabler/icons-react";
import { useMutation } from "@tanstack/react-query";

export function useLogin() {
  return useMutation({
    mutationFn: (data: Record<string, unknown>) => login(data),
    onSuccess: () => {
      notifications.show({
        id: "login-success",
        color: "green",
        title: "Success",
        message: "Login Success",
        icon: <IconCircleCheck size={16} />,
      });
    },
  });
}
