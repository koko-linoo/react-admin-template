import { useLayoutStore } from "@/components/layout/DashboardLayout/layout.store";
import {
  ActionIcon,
  AppShell,
  Avatar,
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
import { IconChevronRight, IconPower } from "@tabler/icons-react";
import { Link, useLocation } from "react-router";
import { SidebarMenuItemType, SidebarMenuType } from "./types";

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
            <Center py={8}>
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
          <Stack gap="0">
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
        {children.map((item) => (
          <SideBarMenuItem key={item.label} {...item} />
        ))}
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
        leftSection={icon ?? <Box w={20} />}
        to={path!}
        component={Link}
      />
      <NavLink
        hiddenFrom="sm"
        onClick={toggleSidebar}
        active={active}
        label={label}
        title={label}
        leftSection={icon ?? <Box w={20} />}
        to={path!}
        component={Link}
      />
    </>
  );
};

export function SideBar({ menus }: { menus: SidebarMenuType[] }) {
  const { opened, toggleSidebar } = useLayoutStore();

  return (
    <AppShell.Navbar py="md">
      <AppShell.Section px="md">
        <Flex justify="space-between" align="center">
          {!opened && (
            <Flex gap="xs">
              <Paper radius="sm" bg="primary.1" w={30} />
              <Text>POS ADMIN</Text>
            </Flex>
          )}
          <Burger size="sm" opened={!opened} onClick={toggleSidebar} />
        </Flex>
      </AppShell.Section>
      <AppShell.Section grow my="md" px="xs" component={ScrollArea}>
        <Stack gap="2px">
          {menus.map((item) => (
            <SideBarMenuItem isRoot key={item.label} {...item} />
          ))}
        </Stack>
      </AppShell.Section>
      <AppShell.Section px="sm">
        {opened ? (
          <Center>
            <ActionIcon variant="transparent">
              <IconPower />
            </ActionIcon>
          </Center>
        ) : (
          <NavLink
            bg="primary.0"
            leftSection={<Avatar />}
            label="Super Admin"
            rightSection={
              <ActionIcon variant="transparent">
                <IconPower />
              </ActionIcon>
            }
          />
        )}
      </AppShell.Section>
    </AppShell.Navbar>
  );
}
