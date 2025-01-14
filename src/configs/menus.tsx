import { SidebarMenuType } from "@/components/layout/DashboardLayout/types";
import {
  IconDashboard,
  IconMessageCircle,
  IconReceipt,
  IconSettings,
} from "@tabler/icons-react";

export const menus: SidebarMenuType[] = [
  {
    label: "Dashboard",
    icon: <IconDashboard size={16} />,
    path: "/dashboard",
  },
  {
    label: "Orders",
    icon: <IconReceipt size={16} />,
    path: "/dashboard/orders",
  },
  {
    label: "Chats",
    icon: <IconMessageCircle size={16} />,
    path: "/dashboard/chats",
  },
  {
    label: "Configurations",
    icon: <IconSettings size={16} />,
    children: [
      {
        label: "Products",
        path: "/dashboard/configurations/products",
      },
      {
        label: "Users",
        path: "/dashboard/configurations/users",
      },
      {
        label: "Roles",
        path: "/dashboard/configurations/roles",
      },
    ],
  },
];
