import { AppShell, Box, Burger, Flex } from "@mantine/core";
import { useLayoutStore } from "./layout.store";

export function Header({
  title = "Dashboard",
  rightSection,
}: {
  title?: React.ReactNode;
  rightSection?: React.ReactNode;
}) {
  const { opened, toggleSidebar } = useLayoutStore();
  return (
    <AppShell.Header>
      <Flex gap="sm" align="center" h="100%" px="md">
        <Burger
          hiddenFrom="sm"
          size="sm"
          opened={!opened}
          onClick={toggleSidebar}
        />
        <Flex justify="space-between">
          <Box>{title}</Box>
          <Box>{rightSection && rightSection}</Box>
        </Flex>
      </Flex>
    </AppShell.Header>
  );
}
