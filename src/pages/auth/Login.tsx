import {
  Button,
  Center,
  Paper,
  PasswordInput,
  Stack,
  TextInput,
  Title,
} from "@mantine/core";
import { IconLock, IconUserCircle } from "@tabler/icons-react";

export default function Login() {
  return (
    <Center w="100vw" h="100vh">
      <Paper bg="primary.0" p="lg" w={340}>
        <Stack>
          <Title order={3} mb="md">
            Login to Dashboard
          </Title>
          <TextInput
            leftSection={<IconUserCircle size={18} />}
            placeholder="Email or Phone"
          />
          <PasswordInput
            mb="md"
            leftSection={<IconLock size={18} />}
            placeholder="Password"
          />
          <Button>Login</Button>
        </Stack>
      </Paper>
    </Center>
  );
}
