import { AppShell, Burger, Flex } from "@mantine/core";
import { useLayoutStore } from "./layout.store";

export function Header() {
  const { opened, toggleSidebar } = useLayoutStore();
  return (
    <AppShell.Header p="md">
      <Flex gap="sm">
        <Burger
          hiddenFrom="sm"
          size="sm"
          opened={!opened}
          onClick={toggleSidebar}
        />
        <div>Header</div>
      </Flex>
    </AppShell.Header>
  );
}
