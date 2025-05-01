export type SidebarMenuItemType = {
  label: string;
  icon?: React.ReactNode;
  path?: string;
  children?: SidebarMenuItemType[];
  isRoot?: boolean;
};

export type SidebarMenuType = Omit<SidebarMenuItemType, "isRoot">;
