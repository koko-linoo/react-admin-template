import api from "@/configs/api";

export function updatePermissions(roleId: string, permissions: Permission[]) {
  return api.post(`/permissions/update-permissions`, { roleId, permissions });
}
