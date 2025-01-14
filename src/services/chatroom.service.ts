import api from "@/configs/api";

export function getChatrooms() {
  return api.get<ChatRoom[]>("/chat-rooms");
}

export function getChatroomDetail(id: string) {
  return api.get<ChatRoom>(`/chat-rooms/${id}`);
}

export function createChatRoom(data: { name: string }) {
  return api.post<ChatRoom>("/chat-rooms", data);
}
