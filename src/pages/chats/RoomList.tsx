import { NavLink, ScrollArea, Stack } from "@mantine/core";
import { IconMessageCircle } from "@tabler/icons-react";
import { Link } from "react-router";
import { useChatRooms } from "./quries";

export function ChatRoomList() {
  const { data, isLoading } = useChatRooms();

  if (isLoading) return <div>Loading...</div>;

  return (
    <ScrollArea h="80vh" scrollbarSize={0}>
      <Stack>
        {data?.map((item, index) => (
          <NavLink
            key={index}
            component={Link}
            to={`/dashboard/chats/${item.id}`}
            p="sm"
            label={item.name}
            leftSection={<IconMessageCircle size={18} />}
          />
        ))}
      </Stack>
    </ScrollArea>
  );
}
