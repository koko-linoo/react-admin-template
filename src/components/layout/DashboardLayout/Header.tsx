import { NotificationButton } from "@/components/cores/buttons/NotificationButton";
import { ThemeButton } from "@/components/cores/buttons/ThemeButton";
import { AppShell, Box, Burger, Flex, Group } from "@mantine/core";
import { Breadcrumb } from "./Breadcrumb";
import { useLayoutStore } from "./layout.store";

export function Header({ title }: { title?: React.ReactNode }) {
  const { opened, toggleSidebar } = useLayoutStore();
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
          <Group>
            <NotificationButton />
            <ThemeButton />
          </Group>
        </Flex>
      </Flex>
    </AppShell.Header>
  );
}
