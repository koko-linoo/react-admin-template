import { DataTable } from "@/components/cores/table/DataTable";
import { ERROR_COLOR, SUCCESS_COLOR } from "@/configs/constants";
import { Flex, Text } from "@mantine/core";
import { IconCircleFilled } from "@tabler/icons-react";
import { MRT_ColumnDef } from "mantine-react-table";
import { useGetUsers } from "./queries";

const columns: MRT_ColumnDef<User>[] = [
  {
    accessorKey: "username",
    header: "Username",
  },
  {
    accessorKey: "email",
    header: "Email",
  },
  {
    accessorKey: "fullName",
    header: "Full Name",
  },
  {
    accessorKey: "isDeleted",
    header: "Status",
    Cell: ({ row }) => {
      const { isDeleted } = row.original;

      let c: string;

      if (isDeleted) {
        c = ERROR_COLOR;
      } else {
        c = SUCCESS_COLOR;
      }

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
    <DataTable<User>
      data={data?.data ?? []}
      columns={columns}
      isLoading={isLoading}
      total={data?.totalCount}
    />
  );
}
