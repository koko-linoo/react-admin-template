import api from "@/configs/api";

export function getUsers(params?: Record<string, unknown>) {
  return api.get<ApiResponseList<User>>("/users", { params });
}

export function createUser(values: Record<string, unknown>) {
  return api.post<ApiResponse<User>>("/users", values);
}
