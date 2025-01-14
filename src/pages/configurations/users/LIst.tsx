import { SearchInput } from "@/components/cores/filters/SearchInput";
import { DataTable } from "@/components/cores/table/DataTable";
import { ERROR_COLOR, SUCCESS_COLOR } from "@/configs/constants";
import {
  ActionIcon,
  Button,
  Flex,
  Group,
  Menu,
  Stack,
  Text,
  Title,
} from "@mantine/core";
import {
  IconCircleFilled,
  IconDotsVertical,
  IconPlus,
} from "@tabler/icons-react";
import { MRT_ColumnDef } from "mantine-react-table";
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
];

export default function UserList() {
  const { data, isLoading } = useGetUsers();

  return (
    <Stack>
      <Group justify="space-between" align="center">
        <Title order={3}>Users</Title>
        <Flex gap="xs" align="center">
          <SearchInput />
          <Button leftSection={<IconPlus />} size="xs">
            Add User
          </Button>
          <Menu>
            <Menu.Target>
              <ActionIcon variant="transparent" size="xs">
                <IconDotsVertical />
              </ActionIcon>
            </Menu.Target>
            <Menu.Dropdown>
              <Menu.Item>Edit</Menu.Item>
              <Menu.Item>Delete</Menu.Item>
            </Menu.Dropdown>
          </Menu>
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
