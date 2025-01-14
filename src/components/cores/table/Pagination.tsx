import { useParamsHelper } from "@/hooks/useParamHelper";
import {
  Box,
  Divider,
  Group,
  Pagination as MantinePagination,
} from "@mantine/core";
import { PageSizeSelect } from "./PageSizeSelect";

export function Pagination({ total = 1 }: { total: number }) {
  const { getParam, setParams } = useParamsHelper();

  const totalPage = Math.ceil(total / Number(getParam("limit") ?? "10"));

  return (
    <>
      <Divider />
      <Group justify="flex-end" px="sm" py="xs">
        <Box>
          Total : <b>{total}</b>
        </Box>
        <PageSizeSelect />
        <MantinePagination
          size="xs"
          radius="xl"
          value={Number(getParam("page") ?? "1")}
          total={totalPage}
          onChange={(index) => setParams({ page: index.toString() })}
        />
      </Group>
    </>
  );
}
