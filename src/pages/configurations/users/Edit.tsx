import { ActionIcon, Drawer } from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import { IconEdit } from "@tabler/icons-react";
import { UserForm } from "./Form";
import { useUpdateUser } from "./queries";

export function EditUser(props: { user: User }) {
  const [opened, { open, close }] = useDisclosure(false);

  const { isPending, mutateAsync } = useUpdateUser();

  const onSubmit = (values: Record<string, unknown>) => {
    mutateAsync({
      id: props.user.id,
      fullName: values.fullName,
      username: values.username,
      email: values.email,
      roleId: values.roleId,
    }).then(() => close());
  };

  return (
    <>
      <ActionIcon onClick={open} size="sm" variant="transparent">
        <IconEdit />
      </ActionIcon>
      <Drawer
        opened={opened}
        onClose={close}
        title="Edit User"
        position="right"
      >
        <UserForm
          initialValues={props.user}
          loading={isPending}
          onSubmit={onSubmit}
          onCancel={close}
        />
      </Drawer>
    </>
  );
}
