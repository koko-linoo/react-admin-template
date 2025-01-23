import { SearchInput } from "@/components/cores/filters/SearchInput";
import { DataTable } from "@/components/cores/table/DataTable";
import { ActionIcon, Flex, Group, Stack, Title } from "@mantine/core";
import { IconLock } from "@tabler/icons-react";
import { MRT_ColumnDef } from "mantine-react-table";
import { Link } from "react-router";
import { CreateRoleForm, EditRoleForm } from "./Form";
import { useGetRoles } from "./quries";

const columns: MRT_ColumnDef<Role>[] = [
  {
    accessorKey: "permission",
    header: "Permissions",
    size: 100,
    Cell: ({ row }) => {
      return (
        <ActionIcon
          component={Link}
          variant="transparent"
          size="sm"
          to={`/dashboard/configurations/roles/${row.original.id}`}
        >
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
    Cell: ({ row }) => {
      return <EditRoleForm data={row.original} />;
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
          <CreateRoleForm />
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
