import { Checkbox, Group, Stack, Text } from "@mantine/core";
import { useGetUsers } from "./quries";

export function UserList() {
  const { isLoading, data } = useGetUsers();

  if (isLoading) return <div>Loading...</div>;

  return (
    <Stack>
      {data?.map((item) => (
        <Group key={item.id} align="center">
          <Checkbox size="xs" />
          <Text>{item.fullName}</Text>
        </Group>
      ))}
    </Stack>
  );
}
