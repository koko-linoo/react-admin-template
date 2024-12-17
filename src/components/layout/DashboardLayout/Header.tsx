import { ActionIcon, AppShell, Box, Burger, Flex } from "@mantine/core";
import { useLayoutStore } from "./layout.store";
import { IconMoon, IconSun } from "@tabler/icons-react";
import { useThemeStore } from "@/stores/theme.store";

export function Header({ title = "Dashboard" }: { title?: React.ReactNode }) {
  const { opened, toggleSidebar } = useLayoutStore();
  const { themeMode, toggleTheme } = useThemeStore();
  return (
    <AppShell.Header>
      <Flex gap="sm" align="center" h="100%" px="md" w="100%">
        <Burger
          hiddenFrom="sm"
          size="sm"
          opened={!opened}
          onClick={toggleSidebar}
        />
        <Flex justify="space-between" align="center" w="100%">
          <Box>{title}</Box>
          <Box>
            <ActionIcon onClick={toggleTheme} variant="transparent">
              {themeMode === "dark" ? (
                <IconSun size={18} title="Light Mode" />
              ) : (
                <IconMoon size={18} title="Dark Mode" />
              )}
            </ActionIcon>
          </Box>
        </Flex>
      </Flex>
    </AppShell.Header>
  );
}
