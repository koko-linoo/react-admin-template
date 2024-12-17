import { useSearchParams } from "react-router-dom";

type VALUE = string | null | number | undefined;

function removeNil(obj: Record<string, VALUE>) {
  return Object.fromEntries(
    Object.entries(obj).filter(([, v]) => Boolean(v))
  ) as Record<string, string>;
}

export function useParamsHelper() {
  const [searchParams, setSearchParams] = useSearchParams();

  const getParam = (key: string) => searchParams.get(key);

  const getParams = () => Object.fromEntries([...searchParams]);

  const replaceParams = (newParams: Record<string, VALUE>) => {
    setSearchParams(removeNil(newParams));
  };

  const setParam = (key: string, value?: VALUE) => {
    const params = Object.fromEntries([...searchParams]);
    setSearchParams(removeNil({ ...params, [key]: value }));
  };

  const setParams = (newParams: Record<string, VALUE>) => {
    const params = Object.fromEntries([...searchParams]);
    setSearchParams(removeNil({ ...params, ...newParams }));
  };

  return {
    getParam,
    getParams,
    replaceParams,
    setParam,
    setParams,
    searchParams,
  };
}
