import { FormProps } from "@/pages/props";
import {
  ActionIcon,
  Button,
  Drawer,
  Flex,
  Group,
  ScrollArea,
  Stack,
  TextInput,
  Title,
} from "@mantine/core";
import { useForm } from "@mantine/form";
import { useDisclosure } from "@mantine/hooks";
import { IconEdit, IconPlus, IconX } from "@tabler/icons-react";
import { useCreateModule, useUpdateModule } from "./quries";

export function CreateModuleForm() {
  const [opened, { open, close }] = useDisclosure(false);

  const { isPending, mutateAsync } = useCreateModule();

  const onSubmit = (values: Record<string, unknown>) => {
    mutateAsync(values).then(() => close());
  };

  return (
    <>
      <Button leftSection={<IconPlus />} size="xs" onClick={open}>
        Add New Module
      </Button>
      <Drawer
        opened={opened}
        onClose={close}
        title="Add Module"
        position="right"
      >
        <ModuleForm onCancel={close} onSubmit={onSubmit} loading={isPending} />
      </Drawer>
    </>
  );
}

export function EditModuleForm({ data }: { data: Module }) {
  const [opened, { open, close }] = useDisclosure(false);

  const { isPending, mutateAsync } = useUpdateModule();

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
        title="Edit Module"
        position="right"
      >
        <ModuleForm
          loading={isPending}
          initialValues={data}
          onCancel={close}
          onSubmit={onSubmit}
        />
      </Drawer>
    </>
  );
}

export function ModuleForm({ onCancel, onSubmit, loading }: FormProps) {
  const form = useForm({
    initialValues: {
      name: "",
      actions: [
        {
          name: "",
        },
      ],
    },
    validate: {
      name: (value) => (!value ? "Required" : undefined),
      actions: {
        name: (value) => (!value ? "Required" : undefined),
      },
    },
  });

  return (
    <form onSubmit={form.onSubmit((values) => onSubmit(values))}>
      <Stack h="85vh">
        <TextInput
          label="Module Name"
          placeholder="Enter your module name"
          {...form.getInputProps("name")}
        />
        <Title order={3}>Actions</Title>
        <Button
          onClick={() => {
            form.setFieldValue("actions", [
              ...form.values.actions,
              {
                name: "",
              },
            ]);
          }}
        >
          Add Action
        </Button>
        <ScrollArea scrollbarSize={0} flex={1}>
          <Stack>
            {form.values.actions.map((_, index) => (
              <Flex key={index} align="center" gap="xs">
                <TextInput
                  flex="1"
                  placeholder="Enter your action name"
                  {...form.getInputProps(`actions.${index}.name`)}
                />
                <ActionIcon
                  size="sm"
                  radius="xl"
                  color="red"
                  variant="outline"
                  onClick={() => form.removeListItem("actions", index)}
                >
                  <IconX size={16} />
                </ActionIcon>
              </Flex>
            ))}
          </Stack>
        </ScrollArea>
        <Group justify="right" gap="xs" mt="auto">
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
