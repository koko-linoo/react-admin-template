import { useAuthStore } from "@/stores/auth.store";
import {
  Anchor,
  Button,
  Center,
  Flex,
  Paper,
  PasswordInput,
  Stack,
  Text,
  TextInput,
  Title,
} from "@mantine/core";
import { useForm } from "@mantine/form";
import { Navigate } from "react-router";
import { useLogin } from "./queries";

export default function Login() {
  const { user, login } = useAuthStore((state) => state);

  const { isPending, mutateAsync } = useLogin();

  const form = useForm({
    initialValues: {
      username: "",
      password: "",
    },
    validate: {
      username: (value) => (value.length > 0 ? null : "Username is required"),
      password: (value) => (value.length > 0 ? null : "Password is required"),
    },
  });

  const onSubmit = (values: Record<string, unknown>) => {
    mutateAsync(values).then((response) => {
      login(response.data);
      form.reset();
    });
  };

  if (user) return <Navigate to="/dashboard" />;

  return (
    <Center w="100vw" h="100vh">
      <Paper p="xl" w={340} radius="xl">
        <form onSubmit={form.onSubmit(onSubmit)}>
          <Stack>
            <Flex align="baseline" justify="center">
              <Title c="primary">A</Title>
              <Title order={3} ta="center">
                dmin&nbsp;
              </Title>
              <Title c="primary">L</Title>
              <Title order={3} ta="center">
                ogin
              </Title>
            </Flex>
            <Text ta="center" fz="sm" c="dimmed">
              Hey, Enter your credentials to access the dashboard.
            </Text>
            <TextInput
              placeholder="Username or Email"
              {...form.getInputProps("username")}
            />
            <PasswordInput
              placeholder="Password"
              {...form.getInputProps("password")}
            />
            <Flex align="center" gap={4} mb="xs">
              <Text size="xs" c="dimmed">
                Don't have an account?
              </Text>
              <Anchor size="xs" fw={500}>
                Request Now
              </Anchor>
            </Flex>
            <Button type="submit" loading={isPending}>
              Login
            </Button>
          </Stack>
        </form>
      </Paper>
    </Center>
  );
}
