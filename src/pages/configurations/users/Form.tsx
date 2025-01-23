import { RoleSelect } from "@/components/cores/selects/RoleSelect";
import { FormProps } from "@/pages/props";
import { Button, Group, PasswordInput, Stack, TextInput } from "@mantine/core";
import { useForm, zodResolver } from "@mantine/form";
import { userCreateSchema, userEditSchema } from "./schema";

export function UserForm(props: FormProps) {
  const form = useForm({
    initialValues: props.initialValues ?? {
      fullName: "",
      username: "",
      password: "",
      email: "",
      roleId: "",
    },
    validate: zodResolver(
      props.initialValues ? userEditSchema : userCreateSchema
    ),
  });

  return (
    <form onSubmit={form.onSubmit((values) => props.onSubmit(values))}>
      <Stack>
        <TextInput
          label="Full Name"
          placeholder="Enter your full name"
          {...form.getInputProps("fullName")}
        />
        <TextInput
          label="Username"
          placeholder="Enter your username"
          {...form.getInputProps("username")}
        />
        <TextInput
          label="Email"
          placeholder="Enter your email"
          {...form.getInputProps("email")}
        />
        {!props.initialValues && (
          <PasswordInput
            label="Password"
            placeholder="Enter your password"
            {...form.getInputProps("password")}
          />
        )}
        <RoleSelect {...form.getInputProps("roleId")} />
        <Group justify="right" gap="xs">
          <Button onClick={props.onCancel} variant="outline">
            Cancel
          </Button>
          <Button loading={props.loading} type="submit">
            Save
          </Button>
        </Group>
      </Stack>
    </form>
  );
}
