import AvatarImg from "@/assets/images/avatar.png";
import { useAuthStore } from "@/stores/auth.store";
import {
  Avatar,
  Box,
  Divider,
  Flex,
  HoverCard,
  NavLink,
  Paper,
  Stack,
  Text,
} from "@mantine/core";
import { IconChevronRight, IconUser } from "@tabler/icons-react";

export default function UserAvatar() {
  const user = useAuthStore((state) => state.user);

  const src = user?.profileUrl ?? AvatarImg;

  return (
    <HoverCard width={280} shadow="md" withArrow>
      <HoverCard.Target>
        <Avatar src={src} bg="gray.2" />
      </HoverCard.Target>
      <HoverCard.Dropdown p="0">
        <Flex h={140} pos="relative" align="center">
          <Box w="100%" h={80} pos="absolute" top={0} bg="primary.2" />
          <Paper radius="60%" p="2px" bg="white" style={{ zIndex: 1 }} mx="sm">
            <Avatar src={src} bg="gray.2" size={100} />
          </Paper>
        </Flex>
        <Stack gap="0" px="sm" mb="sm">
          <Text fz="lg" fw="bold">
            {user?.fullName}
          </Text>
          <Text fz="sm" c="dimmed">
            {user?.email}
          </Text>
          <Divider mt="xs" />
          <NavLink
            leftSection={<IconUser size={20} />}
            p="xs"
            label="Profile"
            rightSection={<IconChevronRight size={16} />}
          />
        </Stack>
      </HoverCard.Dropdown>
    </HoverCard>
  );
}
