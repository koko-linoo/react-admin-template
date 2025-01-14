export const userKeys = {
  all: ["user"] as const,
  lists: () => [...userKeys.all, "list"] as const,
  listFilter: (filters: string) => [...userKeys.lists(), { filters }] as const,
  details: () => [...userKeys.all, "detail"] as const,
  detail: (id: number) => [...userKeys.details(), id] as const,
};

export const chatRoomKeys = {
  all: ["chatRooms"] as const,
  lists: () => [...chatRoomKeys.all, "list"] as const,
  listFilter: (filters: string) =>
    [...chatRoomKeys.lists(), { filters }] as const,
  details: () => [...chatRoomKeys.all, "detail"] as const,
  detail: (id: string) => [...chatRoomKeys.details(), id] as const,
};
