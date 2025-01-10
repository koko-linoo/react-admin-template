import { ActionIcon, useMantineColorScheme } from "@mantine/core";
import { IconMoon, IconSun } from "@tabler/icons-react";

export function ThemeButton() {
  const { toggleColorScheme, colorScheme } = useMantineColorScheme();

  return (
    <ActionIcon onClick={toggleColorScheme} variant="outline">
      {colorScheme === "dark" ? (
        <IconSun size={18} title="Light Mode" />
      ) : (
        <IconMoon size={18} title="Dark Mode" />
      )}
    </ActionIcon>
  );
}
