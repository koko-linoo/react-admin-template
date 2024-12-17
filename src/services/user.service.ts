import api from "@/configs/api";

export function getUsers(params?: Record<string, unknown>) {
  return api.post<ApiResponseList<User>>("/users", { params });
}
