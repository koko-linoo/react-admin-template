import { Button, Drawer } from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import { IconPlus } from "@tabler/icons-react";
import { UserForm } from "./Form";
import { useCreateUser } from "./queries";

export function CreateUser() {
  const [opened, { open, close }] = useDisclosure(false);

  const { isPending, mutateAsync } = useCreateUser();

  const onSubmit = (values: Record<string, unknown>) => {
    mutateAsync(values).then(() => close());
  };

  return (
    <>
      <Button onClick={open} leftSection={<IconPlus />} size="xs">
        Add New User
      </Button>
      <Drawer opened={opened} onClose={close} title="Add User" position="right">
        <UserForm loading={isPending} onSubmit={onSubmit} onCancel={close} />
      </Drawer>
    </>
  );
}
