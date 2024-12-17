import MantineProvider from "@/components/MantineProvider";
import { router } from "@/configs/routes.tsx";
import { createRoot } from "react-dom/client";
import { RouterProvider } from "react-router-dom";

createRoot(document.getElementById("root")!).render(
  <MantineProvider>
    <RouterProvider router={router} />
  </MantineProvider>
);
