import { ActionIcon, Menu } from "@mantine/core";
import { IconBell } from "@tabler/icons-react";

export function NotificationButton() {
  return (
    <Menu withArrow position="bottom-end">
      <Menu.Target>
        <ActionIcon variant="outline">
          <IconBell size={18} />
        </ActionIcon>
      </Menu.Target>
      <Menu.Dropdown>
        <Menu.Item>Notifications</Menu.Item>
        <Menu.Item>Mark all as read</Menu.Item>
        <Menu.Item>Settings</Menu.Item>
      </Menu.Dropdown>
    </Menu>
  );
}
