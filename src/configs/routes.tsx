import DashboardLayout from "@/components/layout/DashboardLayout";
import Login from "@/pages/auth/Login";
import ChattingPage, { ChatRoom } from "@/pages/chats";
import ModuleList from "@/pages/configurations/modules/List";
import ProductDetail from "@/pages/configurations/products/Detail";
import ProductList from "@/pages/configurations/products/List";
import RoleList from "@/pages/configurations/roles/List";
import UserList from "@/pages/configurations/users/LIst";
import Dashboard from "@/pages/dashboard/Dashboard";
import NotFoundPage from "@/pages/NotfoundPage";
import OrderList from "@/pages/orders/List";
import WelcomePage from "@/pages/WelcomePage";
import { createBrowserRouter, Outlet } from "react-router-dom";
import { menus } from "./menus";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <WelcomePage />,
  },
  {
    path: "/dashboard",
    element: <DashboardLayout menus={menus} />,
    children: [
      {
        index: true,
        element: <Dashboard />,
      },
      {
        path: "orders",
        element: <OrderList />,
      },
      {
        path: "chats",
        element: <ChattingPage />,
      },
      {
        path: "chats/:id",
        element: <ChatRoom />,
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
  {
    path: "*",
    element: <NotFoundPage />,
  },
]);
