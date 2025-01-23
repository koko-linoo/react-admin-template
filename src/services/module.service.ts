import api from "@/configs/api";

export function getModules() {
  return api.get<Module[]>("/modules");
}

export function createModule(values: Record<string, unknown>) {
  return api.post<ApiResponse<Module>>("/modules", values);
}

export function updateModule(id: string, values: Record<string, unknown>) {
  return api.patch<ApiResponse<Module>>(`/modules/${id}`, values);
}
