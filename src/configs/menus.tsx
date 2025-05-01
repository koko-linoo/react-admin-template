import { SidebarMenuType } from "@/components/layout/DashboardLayout/types";
import { IconDashboard, IconSettings } from "@tabler/icons-react";

export const menus: SidebarMenuType[] = [
  {
    label: "Dashboard",
    icon: <IconDashboard size={16} />,
    path: "/dashboard",
  },
  {
    label: "Configurations",
    icon: <IconSettings size={16} />,
    children: [
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
