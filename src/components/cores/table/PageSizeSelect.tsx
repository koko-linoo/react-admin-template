import { useParamsHelper } from "@/hooks/useParamHelper";
import { Select, SelectProps } from "@mantine/core";
import { IconCaretDown } from "@tabler/icons-react";

const pageSize = [
  { label: "10", value: "10" },
  { label: "20", value: "20" },
  { label: "30", value: "30" },
  { label: "40", value: "40" },
  { label: "50", value: "50" },
];

export function PageSizeSelect(props: Omit<SelectProps, "data">) {
  const { setParams, getParam } = useParamsHelper();

  return (
    <Select
      searchable={false}
      checkIconPosition="right"
      defaultValue={getParam("limit") ?? "10"}
      styles={{ section: { pointerEvents: "none" } }}
      rightSection={<IconCaretDown size="16px" />}
      size="xs"
      miw="70px"
      w="70px"
      data={pageSize}
      onChange={(value) => {
        setParams({
          page: "1",
          limit: value,
        });
      }}
      {...props}
    />
  );
}
