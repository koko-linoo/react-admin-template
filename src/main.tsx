import MantineProvider from "@/components/MantineProvider";
import { router } from "@/configs/routes.tsx";
import { notifications } from "@mantine/notifications";
import { IconCircleX } from "@tabler/icons-react";
import {
  MutationCache,
  QueryCache,
  QueryClient,
  QueryClientProvider,
} from "@tanstack/react-query";
import { AxiosError } from "axios";
import { createRoot } from "react-dom/client";
import { RouterProvider } from "react-router-dom";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
      retry: false,
    },
  },
  queryCache: new QueryCache({
    onError: (error) => {
      const res = error as AxiosError<ApiErrorResponse>;
      notifications.show({
        id: "query-error",
        color: "red",
        title: res.response?.data.error,
        message: res.response?.data.message,
        icon: <IconCircleX size={16} />,
      });
    },
  }),
  mutationCache: new MutationCache({
    onError: (error) => {
      const res = error as AxiosError<ApiErrorResponse>;
      notifications.show({
        id: "mutate-error",
        color: "red",
        title: res.response?.data.error,
        message: res.response?.data.message,
        icon: <IconCircleX size={16} />,
      });
    },
  }),
});

createRoot(document.getElementById("root")!).render(
  <QueryClientProvider client={queryClient}>
    <MantineProvider>
      <RouterProvider router={router} />
    </MantineProvider>
  </QueryClientProvider>
);
