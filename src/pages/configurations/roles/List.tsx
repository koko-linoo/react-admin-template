import { SearchInput } from "@/components/cores/filters/SearchInput";
import { DataTable } from "@/components/cores/table/DataTable";
import { ActionIcon, Button, Flex, Group, Stack, Title } from "@mantine/core";
import { IconEdit, IconLock, IconPlus } from "@tabler/icons-react";
import { MRT_ColumnDef } from "mantine-react-table";
import { useGetRoles } from "./quries";

const columns: MRT_ColumnDef<Role>[] = [
  {
    accessorKey: "permission",
    header: "Permissions",
    size: 100,
    Cell: () => {
      return (
        <ActionIcon variant="transparent" size="sm">
          <IconLock />
        </ActionIcon>
      );
    },
  },
  {
    accessorKey: "name",
    header: "Role Name",
  },
  {
    accessorKey: "description",
    header: "Descriptoin",
    Cell: ({ row }) => {
      return row.original.description ?? "-";
    },
  },
  {
    accessorKey: "actions",
    header: "Actions",
    size: 40,
    Cell: () => {
      return (
        <ActionIcon variant="transparent" size="sm">
          <IconEdit />
        </ActionIcon>
      );
    },
  },
];

export default function RoleList() {
  const { data, isLoading } = useGetRoles();

  return (
    <Stack>
      <Group justify="space-between" align="center">
        <Title order={3}>Roles</Title>
        <Flex gap="xs" align="center">
          <SearchInput />
          <Button leftSection={<IconPlus />} size="xs">
            Add New Role
          </Button>
        </Flex>
      </Group>
      <DataTable<Role>
        data={data?.data ?? []}
        columns={columns}
        isLoading={isLoading}
        total={data?.totalCount}
      />
    </Stack>
  );
}
