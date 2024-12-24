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
  };

  type ApiResponse<T> = {
    data: T;
  };

  type ApiResponseList<T> = {
    data: T[];
    totalCount: number;
    page: number;
    pageSize: number;
  };
}
