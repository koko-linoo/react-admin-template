import { useAuthStore } from "@/stores/auth.store";
import { ActionIcon } from "@mantine/core";
import { modals } from "@mantine/modals";
import { IconPower } from "@tabler/icons-react";

export function LogoutButton() {
  const logout = useAuthStore((state) => state.logout);

  const handleLogout = () => {
    modals.openConfirmModal({
      title: "Are you sure you want to logout?",
      children: "This action will log you out of the application",
      labels: {
        confirm: "Logout",
        cancel: "Cancel",
      },
      onConfirm: () => logout(),
    });
  };

  return (
    <ActionIcon variant="transparent" onClick={handleLogout}>
      <IconPower />
    </ActionIcon>
  );
}
