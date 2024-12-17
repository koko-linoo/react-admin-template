export {};

declare global {
  type User = {
    id: number;
    name: string;
    email: string;
    password: string;
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
