import { Select, SelectProps } from "@mantine/core";
import { useRolesSelect } from "./quries";

export function RoleSelect(props: SelectProps) {
  const { data, isLoading } = useRolesSelect();

  return (
    <Select
      clearable
      disabled={isLoading}
      label="Role"
      placeholder="Select your role"
      data={data}
      {...props}
    />
  );
}
