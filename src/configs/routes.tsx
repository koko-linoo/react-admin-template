import DashboardLayout from "@/components/layout/DashboardLayout";
import { ErrorPage } from "@/components/pages/ErrorPage";
import Login from "@/pages/auth/Login";
import ModuleList from "@/pages/configurations/modules/List";
import ProductList from "@/pages/configurations/products/List";
import RoleList from "@/pages/configurations/roles/List";
import UserList from "@/pages/configurations/users/LIst";
import Dashboard from "@/pages/dashboard/Dashboard";
import OrderList from "@/pages/orders/List";
import { createBrowserRouter } from "react-router-dom";
import { menus } from "./menus";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <DashboardLayout menus={menus} />,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        element: <Dashboard />,
      },
      {
        path: "products",
        element: <ProductList />,
      },
      {
        path: "orders",
        element: <OrderList />,
      },
      {
        path: "roles",
        element: <RoleList />,
      },
      {
        path: "users",
        element: <UserList />,
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
]);
