import { SidebarMenuType } from "@/components/layout/DashboardLayout/types";
import { IconDashboard, IconReceipt, IconSettings } from "@tabler/icons-react";

export const menus: SidebarMenuType[] = [
  {
    label: "Dashboard",
    icon: <IconDashboard size={20} />,
    path: "/",
  },
  {
    label: "Orders",
    icon: <IconReceipt size={20} />,
    path: "/orders",
  },
  {
    label: "Configurations",
    icon: <IconSettings size={20} />,
    children: [
      {
        label: "Products",
        path: "/products",
      },
      {
        label: "Users",
        path: "/users",
      },
      {
        label: "Roles",
        path: "/roles",
      },
    ],
  },
];
