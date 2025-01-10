import { MRT_TableOptions } from "mantine-react-table";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export function getTableOption<T extends Record<string, any>>() {
  const option: Partial<MRT_TableOptions<T>> = {
    enableStickyHeader: true,
    enableSorting: false,
    enableColumnActions: false,
    enableTopToolbar: false,
    enableColumnPinning: true,
    enableBottomToolbar: false,
    enablePagination: false,
    enableExpandAll: false,
    mantinePaperProps: {
      radius: "none",
      shadow: "none",
      withBorder: false,
    },
    mantineTableProps: {
      highlightOnHover: true,
    },
    mantineTableHeadCellProps: {
      fw: "bolder",
      fz: "xs",
      c: "gray",
    },
    mantineTableBodyCellProps: {
      fz: "sm",
      py: "8px",
      fw: 400,
    },
    mantineTableContainerProps: {
      mah: "calc(100vh - 13.5rem)",
      miw: "calc(100vw - 2rem - 250px)",
      style: {
        scrollbarWidth: "thin",
      },
    },
  };

  return option;
}
