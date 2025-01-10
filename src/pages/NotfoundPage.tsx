import { Button, Center, Stack, Text, Title } from "@mantine/core";
import { IconArrowLeft } from "@tabler/icons-react";
import { Link } from "react-router";

export default function NotFoundPage() {
  return (
    <Center h="100vh" w="100vw">
      <Stack align="center" gap="xs">
        <Title fz={100} ff="monospace" ta="center">
          404
        </Title>
        <Text fz="lg" fw="bold" c="dark.3">
          Opps! Look like this page doesn't exist!
        </Text>
        <Text c="gray" fz="sm">
          Go back to home and try again!
        </Text>
        <Button mt="sm" component={Link} to="/" leftSection={<IconArrowLeft />}>
          Back to Home
        </Button>
      </Stack>
    </Center>
  );
}
