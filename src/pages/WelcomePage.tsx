import { Button, Center, Stack, Title } from "@mantine/core";
import { IconArrowRight } from "@tabler/icons-react";
import { Link } from "react-router";

export default function WelcomePage() {
  return (
    <Center h="100vh" w="100vw">
      <Stack align="center">
        <Title fz={50}>Welcome!</Title>
        <Title fz="lg" ta="center" c="dark.3">
          This is a POS Admin Dashboard
        </Title>
        <Button component={Link} to="/login" rightSection={<IconArrowRight />}>
          Go to Login
        </Button>
      </Stack>
    </Center>
  );
}
