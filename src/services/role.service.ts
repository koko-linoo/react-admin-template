import api from "@/configs/api";

export function getRoles(params?: Record<string, unknown>) {
  return api.get<ApiResponseList<Role>>("/roles", { params });
}

export function createRole(values: Record<string, unknown>) {
  return api.post<ApiResponse<Role>>("/roles", values);
}
