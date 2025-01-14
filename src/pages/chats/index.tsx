import { useAuthStore } from "@/stores/auth.store";
import {
  Box,
  Button,
  Divider,
  Flex,
  Paper,
  ScrollArea,
  Stack,
  Text,
  TextInput,
} from "@mantine/core";
import { useForm } from "@mantine/form";
import { Outlet, useParams } from "react-router";
import { useChat } from "./hook";
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
  const { ref, socket, messages, isLoading } = useChat();
  const user = useAuthStore((state) => state.user);

  if (isLoading) return <div>Loading...</div>;

  return (
    <>
      <Divider orientation="vertical" mx="md" />
      <Stack flex="1" gap="xl">
        <ScrollArea h="75vh" scrollbarSize={0}>
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
        </ScrollArea>
        <ChatForm
          onSubmit={(message) => {
            socket.emit("sendMessage", {
              channel: id,
              user,
              message,
            });
          }}
        />
      </Stack>
    </>
  );
}

export default function ChattingPage() {
  return (
    <Flex>
      <Box flex="1">
        <ChatRoomList />
      </Box>
      <Outlet />
    </Flex>
  );
}
