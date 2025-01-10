import {
  MantineReactTable,
  MRT_ColumnDef,
  MRT_ColumnPinningState,
  MRT_Row,
  MRT_RowData,
  MRT_TableInstance,
} from "mantine-react-table";

import { Paper } from "@mantine/core";

import { getTableOption } from "./config";
import { Pagination } from "./Pagination";

export type DataTableProps<T extends MRT_RowData> = {
  columns: MRT_ColumnDef<T, unknown>[];
  data: T[];
  rightSection?: React.ReactNode;
  isLoading?: boolean;
  columnPinning?: MRT_ColumnPinningState;
  total?: number;
  renderDetailPanel?: (props: {
    row: MRT_Row<T>;
    table: MRT_TableInstance<T>;
  }) => React.ReactNode;
};

export function DataTable<T extends MRT_RowData>({
  isLoading,
  columnPinning = {},
  total,
  ...props
}: DataTableProps<T>) {
  return (
    <Paper withBorder p="1px">
      <MantineReactTable<T>
        {...getTableOption<T>()}
        {...props}
        state={{
          isLoading,
          columnPinning,
        }}
      />
      {total ? <Pagination total={total} /> : null}
    </Paper>
  );
}
