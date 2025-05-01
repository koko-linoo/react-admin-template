import { LogoutButton } from "@/components/cores/buttons/LogoutButton";
import UserAvatar from "@/components/cores/UserAvatar";
import { useLayoutStore } from "@/components/layout/DashboardLayout/layout.store";
import { HEADER_HEIGHT } from "@/configs/constants";
import { useAuthStore } from "@/stores/auth.store";
import {
  ActionIcon,
  AppShell,
  Box,
  Burger,
  Center,
  Flex,
  HoverCard,
  NavLink,
  Paper,
  ScrollArea,
  Stack,
  Text,
} from "@mantine/core";
import { IconChevronRight } from "@tabler/icons-react";
import { Link, useLocation } from "react-router";
import { SidebarMenuItemType } from "./types";
import { menus } from "@/configs/menus";

const SideBarMenuItem = ({
  label,
  icon,
  path,
  children,
  isRoot = false,
}: SidebarMenuItemType) => {
  const location = useLocation();

  const active =
    location.pathname === path ||
    (children && children.some((item) => item.path === location.pathname));

  const { opened, toggleSidebar } = useLayoutStore((state) => state);

  if (opened) {
    return (
      <HoverCard
        shadow="md"
        position="right-start"
        withArrow
        offset={16}
        arrowOffset={20}
      >
        <HoverCard.Target>
          {isRoot ? (
            <Center py={4}>
              <ActionIcon
                color={active ? "primary" : "gray"}
                variant="transparent"
                title={label}
                component={Link}
                to={path ?? "#"}
              >
                {icon}
              </ActionIcon>
            </Center>
          ) : (
            <NavLink
              active={children ? false : active}
              miw={180}
              label={label}
              title={label}
              component={Link}
              to={path!}
              rightSection={
                children ? <IconChevronRight size={16} /> : undefined
              }
            />
          )}
        </HoverCard.Target>
        <HoverCard.Dropdown p="0">
          <Stack gap={2}>
            {children?.map((item) => (
              <SideBarMenuItem key={item.label} {...item} />
            ))}
          </Stack>
        </HoverCard.Dropdown>
      </HoverCard>
    );
  }

  if (children) {
    return (
      <NavLink
        childrenOffset={0}
        label={label}
        leftSection={icon}
        to={path!}
        component={Link}
        defaultOpened={children.some((item) => item.path === location.pathname)}
      >
        <Stack gap={2}>
          {children.map((item) => (
            <SideBarMenuItem key={item.label} {...item} />
          ))}
        </Stack>
      </NavLink>
    );
  }

  return (
    <>
      <NavLink
        visibleFrom="sm"
        active={active}
        label={label}
        title={label}
        leftSection={icon ?? <Box w={16} />}
        to={path!}
        component={Link}
      />
      <NavLink
        hiddenFrom="sm"
        onClick={toggleSidebar}
        active={active}
        label={label}
        title={label}
        leftSection={icon ?? <Box w={16} />}
        to={path!}
        component={Link}
      />
    </>
  );
};

export function SideBar() {
  const { opened, toggleSidebar } = useLayoutStore();

  const user = useAuthStore((state) => state.user);

  return (
    <AppShell.Navbar>
      <AppShell.Section px="xs" py="xs" h={HEADER_HEIGHT}>
        <Flex
          justify={!opened ? "space-between" : "center"}
          align="center"
          h="100%"
        >
          {!opened && (
            <Flex gap="xs">
              <Paper radius="sm" bg="primary.1" w={30} />
              <Text>POS ADMIN</Text>
            </Flex>
          )}
          <Burger size="xs" onClick={toggleSidebar} />
        </Flex>
      </AppShell.Section>
      <AppShell.Section grow my="xs" px="xs" component={ScrollArea}>
        <Stack gap={2}>
          {menus.map((item) => (
            <SideBarMenuItem isRoot key={item.label} {...item} />
          ))}
        </Stack>
      </AppShell.Section>
      <AppShell.Section px="sm" my="xs">
        {opened ? (
          <Center>
            <LogoutButton />
          </Center>
        ) : (
          <NavLink
            leftSection={<UserAvatar />}
            label={user?.fullName}
            rightSection={<LogoutButton />}
          />
        )}
      </AppShell.Section>
    </AppShell.Navbar>
  );
}
