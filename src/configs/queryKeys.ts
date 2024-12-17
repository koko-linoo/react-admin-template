export const user = {
  all: ["user"] as const,
  lists: () => [...user.all, "list"] as const,
  list: (filters: string) => [...user.lists(), { filters }] as const,
  details: () => [...user.all, "detail"] as const,
  detail: (id: number) => [...user.details(), id] as const,
};
