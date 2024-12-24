import { SidebarMenuType } from "@/components/layout/DashboardLayout/types";
import { IconDashboard, IconReceipt, IconSettings } from "@tabler/icons-react";

export const menus: SidebarMenuType[] = [
  {
    label: "Dashboard",
    icon: <IconDashboard size={16} />,
    path: "/",
  },
  {
    label: "Orders",
    icon: <IconReceipt size={16} />,
    path: "/orders",
  },
  {
    label: "Configurations",
    icon: <IconSettings size={16} />,
    children: [
      {
        label: "Products",
        path: "/configurations/products",
      },
      {
        label: "Users",
        path: "/configurations/users",
      },
      {
        label: "Roles",
        path: "/configurations/roles",
      },
    ],
  },
];
