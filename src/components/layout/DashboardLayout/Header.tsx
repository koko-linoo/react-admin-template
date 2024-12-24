import {
  ActionIcon,
  AppShell,
  Box,
  Burger,
  Flex,
  useMantineColorScheme,
} from "@mantine/core";
import { IconMoon, IconSun } from "@tabler/icons-react";
import { Breadcrumb } from "./Breadcrumb";
import { useLayoutStore } from "./layout.store";

export function Header({ title }: { title?: React.ReactNode }) {
  const { opened, toggleSidebar } = useLayoutStore();
  const { toggleColorScheme, colorScheme } = useMantineColorScheme();
  return (
    <AppShell.Header>
      <Flex gap="sm" align="center" h="100%" px="md" w="100%">
        <Burger
          hiddenFrom="sm"
          size="xs"
          opened={!opened}
          onClick={toggleSidebar}
        />
        <Flex justify="space-between" align="center" w="100%">
          <Box>{title ?? <Breadcrumb />}</Box>
          <Box>
            <ActionIcon onClick={toggleColorScheme} variant="transparent">
              {colorScheme === "dark" ? (
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
