import { DataTable } from "@/components/cores/table/DataTable";
import { MRT_ColumnDef } from "mantine-react-table";

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
  },
];

export default function UserList() {
  return <DataTable<User> data={[]} columns={columns} />;
}
