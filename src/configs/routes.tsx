import DashboardLayout from "@/components/layout/DashboardLayout";
import { ErrorPage } from "@/components/pages/ErrorPage";
import Login from "@/pages/auth/Login";
import ModuleList from "@/pages/configurations/modules/List";
import RoleList from "@/pages/configurations/roles/List";
import UserList from "@/pages/configurations/users/LIst";
import Dashboard from "@/pages/dashboard/Dashboard";
import NotFoundPage from "@/pages/NotfoundPage";
import WelcomePage from "@/pages/WelcomePage";
import { createBrowserRouter, Outlet } from "react-router-dom";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <WelcomePage />,
  },
  {
    path: "/dashboard",
    element: <DashboardLayout />,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        element: <Dashboard />,
      },
      {
        path: "configurations",
        element: <Outlet />,
        children: [
          {
            path: "users",
            element: <UserList />,
          },
          {
            path: "roles",
            element: <RoleList />,
          },
          {
            path: "roles/:id",
            element: <ModuleList />,
          },
        ],
      },
      {
        path: "modules",
        element: <ModuleList />,
      },
    ],
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "*",
    element: <NotFoundPage />,
  },
]);
