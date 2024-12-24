import DashboardLayout from "@/components/layout/DashboardLayout";
import { ErrorPage } from "@/components/pages/ErrorPage";
import Login from "@/pages/auth/Login";
import ModuleList from "@/pages/configurations/modules/List";
import ProductDetail from "@/pages/configurations/products/Detail";
import ProductList from "@/pages/configurations/products/List";
import RoleList from "@/pages/configurations/roles/List";
import UserList from "@/pages/configurations/users/LIst";
import Dashboard from "@/pages/dashboard/Dashboard";
import OrderList from "@/pages/orders/List";
import { createBrowserRouter, Outlet } from "react-router-dom";
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
        path: "/orders",
        element: <OrderList />,
      },
      {
        path: "configurations",
        element: <Outlet />,
        children: [
          {
            path: "products",
            children: [
              {
                index: true,
                element: <ProductList />,
              },
              {
                path: ":id",
                element: <ProductDetail />,
              },
            ],
          },
          {
            path: "users",
            element: <UserList />,
          },
          {
            path: "roles",
            element: <RoleList />,
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
]);
