import { Header } from "@/components/layout/DashboardLayout";
import { useAuthStore } from "@/stores/auth.store";
import {
  AppShellFooter,
  Box,
  Button,
  Drawer,
  Flex,
  Group,
  Paper,
  Stack,
  Text,
  TextInput,
  Title,
} from "@mantine/core";
import { useForm } from "@mantine/form";
import { useDisclosure } from "@mantine/hooks";
import { Outlet, useParams } from "react-router";
import { useChat } from "./hook";
import { useCreateChatRoom } from "./quries";
import { ChatRoomList } from "./RoomList";

export function ChatForm({
  onSubmit,
}: {
  onSubmit: (message: string) => void;
}) {
  const form = useForm({
    initialValues: {
      message: "",
    },
  });

  return (
    <form
      onSubmit={form.onSubmit(({ message }) => {
        if (!message) return;
        onSubmit(message);
        form.reset();
      })}
    >
      <Flex gap="md" align="center">
        <TextInput
          flex={1}
          placeholder="Type your message here"
          {...form.getInputProps("message")}
        />
        <Button type="submit">Send</Button>
      </Flex>
    </form>
  );
}

export function ChatRoom() {
  const { id } = useParams();
  const { ref, socket, messages, isLoading, data } = useChat();
  const user = useAuthStore((state) => state.user);

  if (isLoading) return <div>Loading...</div>;

  return (
    <>
      <Header
        title={
          <Flex align="center">
            <Title order={3}>{data?.name}</Title>
          </Flex>
        }
      />
      <Stack flex="1" gap="xl">
        <Stack>
          {messages.map((message) => (
            <Stack
              key={message.id}
              align={user?.id === message.user.id ? "end" : "start"}
              gap="2px"
            >
              <Text fz="xs" c="dimmed">
                {message.user.fullName}
              </Text>
              <Paper px="xs" radius="xs" withBorder py="4px">
                <Text>{message.message}</Text>
              </Paper>
            </Stack>
          ))}
          <Box ref={ref} />
        </Stack>
      </Stack>
      <AppShellFooter px="sm" py="xl">
        <ChatForm
          onSubmit={(message) => {
            socket.emit("sendMessage", {
              channel: id,
              user,
              message,
            });
          }}
        />
      </AppShellFooter>
    </>
  );
}

export function NewChatRoom() {
  const user = useAuthStore((state) => state.user);

  const [opened, { open, close }] = useDisclosure(false);

  const { mutateAsync } = useCreateChatRoom();

  const form = useForm({
    initialValues: {
      name: "",
      userList: user?.id,
    },
    validate: {
      name: (value) => (value ? undefined : "Chat Room Name is Required"),
    },
  });

  const onSubmit = (values: Record<string, unknown>) => {
    mutateAsync(values).then(() => close());
  };

  return (
    <>
      <Group justify="space-between">
        <Text>Chat Rooms</Text>
        <Button onClick={open}>New Chat</Button>
      </Group>
      <Drawer opened={opened} onClose={close} title="New Chat" position="right">
        <form onSubmit={form.onSubmit((values) => onSubmit(values))}>
          <Stack>
            <TextInput
              label="Name"
              placeholder="Enter Chat Room Name"
              {...form.getInputProps("name")}
            />
            <Group justify="right">
              <Button type="submit">Save</Button>
            </Group>
          </Stack>
        </form>
      </Drawer>
    </>
  );
}

export default function ChattingPage() {
  return (
    <Flex>
      <Stack flex="1">
        <NewChatRoom />
        <ChatRoomList />
      </Stack>
      <Outlet />
    </Flex>
  );
}
