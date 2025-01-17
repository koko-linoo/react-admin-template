import { SearchInput } from "@/components/cores/filters/SearchInput";
import { DataTable } from "@/components/cores/table/DataTable";
import { ERROR_COLOR, SUCCESS_COLOR } from "@/configs/constants";
import { Flex, Group, Stack, Text, Title } from "@mantine/core";
import { IconCircleFilled } from "@tabler/icons-react";
import { MRT_ColumnDef } from "mantine-react-table";
import { CreateUser } from "./Create";
import { EditUser } from "./Edit";
import { useGetUsers } from "./queries";

const columns: MRT_ColumnDef<User>[] = [
  {
    accessorKey: "fullName",
    header: "Full Name",
  },
  {
    accessorKey: "username",
    header: "Username",
  },
  {
    accessorKey: "email",
    header: "Email",
  },
  {
    accessorKey: "role",
    header: "Role",
    Cell: ({ row }) => {
      return row.original.role?.name;
    },
  },
  {
    accessorKey: "isDeleted",
    header: "Status",
    Cell: ({ row }) => {
      const { isDeleted } = row.original;

      let c = SUCCESS_COLOR;

      if (isDeleted) c = ERROR_COLOR;

      return (
        <Flex align="center" justify="flex-start" gap="xs">
          <IconCircleFilled size={10} color={c} />
          <Text fw="bold" fz="xs" c="gray" tt="capitalize">
            {row.original.isDeleted ? "Inactive" : "Active"}
          </Text>
        </Flex>
      );
    },
  },
  {
    accessorKey: "actions",
    header: "Actions",
    size: 60,
    Cell: ({ row }) => {
      return (
        <Group>
          <EditUser user={row.original} />
        </Group>
      );
    },
  },
];

export default function UserList() {
  const { data, isLoading } = useGetUsers();

  return (
    <Stack>
      <Group justify="space-between" align="center">
        <Title order={3}>Users</Title>
        <Flex gap="xs" align="center">
          <SearchInput />
          <CreateUser />
        </Flex>
      </Group>
      <DataTable<User>
        data={data?.data ?? []}
        columns={columns}
        isLoading={isLoading}
        total={data?.totalCount}
      />
    </Stack>
  );
}
