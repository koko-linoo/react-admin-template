import { useGetRoleDetails } from "@/pages/configurations/roles/quries";
import { ChangeEvent, useEffect, useState } from "react";
import { useParams } from "react-router";
import { useGetModules, useUpdatePermissions } from "./quries";

export function useModuleList() {
  const { id } = useParams();

  const roleDetails = useGetRoleDetails();
  const modules = useGetModules();

  const [permissions, setPermissions] = useState<Permission[]>([]);

  const { isPending: isUpdating, mutate } = useUpdatePermissions();

  const handleSubmit = () => mutate({ roleId: id as string, permissions });

  // set permissions from api data
  useEffect(() => {
    setPermissions(roleDetails?.data?.permissions ?? []);
  }, [roleDetails.data?.permissions]);

  // check change
  const handleChange =
    (module: string) => (e: ChangeEvent<HTMLInputElement>) => {
      const action = e.target.value;
      if (e.target.checked)
        setPermissions((olds) => [...olds, { module, action }]);
      else {
        setPermissions((olds) =>
          olds.filter(
            (item) => !(item.module === module && item.action === action)
          )
        );
      }
    };

  const isChecked = (action: Action, module: string) =>
    !!permissions.find((x) => x.action === action.name && x.module === module);

  return {
    isUpdating,
    isLoading: roleDetails.isLoading || modules.isLoading,
    role: roleDetails.data,
    modules: modules.data ?? [],
    isChecked,
    handleSubmit,
    handleChange,
  };
}
