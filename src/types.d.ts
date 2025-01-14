export {};

declare global {
  type User = {
    id: string;
    email: string;
    username: string;
    fullName: string;
    isDeleted: boolean;
    createdAt: string;
    updatedAt: string;
    profileUrl: string;
    roleId?: string;
    role?: Role;
  };

  type Role = {
    id: string;
    name: string;
  };

  type ApiResponse<T> = {
    data: T;
  };

  type ApiErrorResponse = {
    message: string;
    error: string;
    status: number;
  };

  type ApiResponseList<T> = {
    data: T[];
    totalCount: number;
    page: number;
    pageSize: number;
  };

  type LoginResponse = User & {
    accessToken: string;
  };

  type ChatRoom = {
    id: string;
    name: string;
    userList: string;
    createdAt: string;
    updatedAt: string;
    messages: Message[];
  };

  type Message = {
    id: string;
    user: User;
    message: string;
    userId: string;
    createdAt: string;
    updatedAt: string;
    chatRoomId: string;
  };
}
