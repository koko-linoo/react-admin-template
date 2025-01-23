import { FormProps } from "@/pages/props";
import {
  ActionIcon,
  Button,
  Drawer,
  Group,
  Stack,
  Textarea,
  TextInput,
} from "@mantine/core";
import { useForm } from "@mantine/form";
import { useDisclosure } from "@mantine/hooks";
import { IconEdit, IconPlus } from "@tabler/icons-react";
import { useCreateRole, useUpdateRole } from "./quries";

export function CreateRoleForm() {
  const [opened, { open, close }] = useDisclosure(false);

  const { isPending, mutateAsync } = useCreateRole();

  const onSubmit = (values: Record<string, unknown>) => {
    mutateAsync(values).then(() => close());
  };

  return (
    <>
      <Button leftSection={<IconPlus />} size="xs" onClick={open}>
        Add New Role
      </Button>
      <Drawer opened={opened} onClose={close} title="Add Role" position="right">
        <RoleForm onCancel={close} onSubmit={onSubmit} loading={isPending} />
      </Drawer>
    </>
  );
}

export function EditRoleForm({ data }: { data: Role }) {
  const [opened, { open, close }] = useDisclosure(false);

  const { isPending, mutateAsync } = useUpdateRole();

  const onSubmit = (values: Record<string, unknown>) => {
    mutateAsync({ id: data.id, ...values }).then(() => close());
  };

  return (
    <>
      <ActionIcon onClick={open} variant="transparent" size="sm">
        <IconEdit />
      </ActionIcon>
      <Drawer
        opened={opened}
        onClose={close}
        title="Edit Role"
        position="right"
      >
        <RoleForm
          loading={isPending}
          initialValues={data}
          onCancel={close}
          onSubmit={onSubmit}
        />
      </Drawer>
    </>
  );
}

export function RoleForm({
  onCancel,
  onSubmit,
  loading,
  initialValues,
}: FormProps) {
  const form = useForm({
    initialValues: initialValues ?? {
      name: "",
      description: "",
    },
    validate: {
      name: (value) => (!value ? "Required" : undefined),
    },
  });

  return (
    <form onSubmit={form.onSubmit((values) => onSubmit(values))}>
      <Stack>
        <TextInput
          label="Role Name"
          placeholder="Enter your role name"
          {...form.getInputProps("name")}
        />
        <Textarea
          label="Description"
          placeholder="Enter your role description"
          {...form.getInputProps("description")}
        />
        <Group justify="right" gap="xs">
          <Button variant="outline" onClick={onCancel}>
            Cancel
          </Button>
          <Button loading={loading} type="submit">
            Save
          </Button>
        </Group>
      </Stack>
    </form>
  );
}
