/* eslint-disable react-hooks/exhaustive-deps */
import { useParamsHelper } from "@/hooks/useParamHelper";
import { TextInput } from "@mantine/core";
import { useDebouncedValue } from "@mantine/hooks";
import { IconSearch } from "@tabler/icons-react";
import { useEffect, useState } from "react";

export function SearchInput() {
  const [search, setSearch] = useState("");
  const { setParams } = useParamsHelper();

  const [searchValue] = useDebouncedValue(search, 500);

  useEffect(() => {
    setParams({ search: searchValue });
  }, [searchValue]);

  return (
    <TextInput
      size="xs"
      leftSection={<IconSearch size={16} />}
      placeholder="Search"
      onChange={(e) => setSearch(e.target.value)}
      value={search}
    />
  );
}
