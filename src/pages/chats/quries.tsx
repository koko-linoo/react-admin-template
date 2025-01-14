import { chatRoomKeys } from "@/configs/queryKeys";
import { getChatroomDetail, getChatrooms } from "@/services/chatroom.service";
import { useQuery } from "@tanstack/react-query";

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
