import { chatRoomKeys, userKeys } from "@/configs/queryKeys";
import {
  createChatRoom,
  getChatroomDetail,
  getChatrooms,
} from "@/services/chatroom.service";
import { getUsers } from "@/services/user.service";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";

export function useChatRooms() {
  return useQuery({
    queryKey: chatRoomKeys.lists(),
    queryFn: () => getChatrooms(),
    select: (data) => data.data,
  });
}

export function useChatRoomDetail(id: string) {
  return useQuery({
    queryKey: chatRoomKeys.detail(id),
    queryFn: () => getChatroomDetail(id),
    select: (data) => data.data,
  });
}

export function useCreateChatRoom() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (data: Record<string, unknown>) => createChatRoom(data),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: chatRoomKeys.all });
    },
  });
}

export function useGetUsers(search?: string) {
  const query = {
    search,
    page: 1,
    limit: 10,
  };

  return useQuery({
    queryKey: userKeys.listFilter(JSON.stringify(query)),
    queryFn: () => getUsers(query),
    select: (data) => data.data?.data,
  });
}
