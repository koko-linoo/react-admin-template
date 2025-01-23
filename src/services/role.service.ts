import api from "@/configs/api";

export function getRoles(params?: Record<string, unknown>) {
  return api.get<ApiResponseList<Role>>("/roles", { params });
}

export function createRole(values: Record<string, unknown>) {
  return api.post<ApiResponse<Role>>("/roles", values);
}

export function updateRole(id: string, values: Record<string, unknown>) {
  return api.patch<ApiResponse<Role>>(`/roles/${id}`, values);
}

export function getRoleDetails(id: string | undefined) {
  return api.get<Role>(`/roles/${id}`);
}
