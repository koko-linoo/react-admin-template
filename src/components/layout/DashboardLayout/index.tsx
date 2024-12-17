import { SIDEBAR_WIDTH } from "@/configs/constants";
import { AppShell } from "@mantine/core";
import { Outlet } from "react-router-dom";
import { Header } from "./Header";
import { useLayoutStore } from "./layout.store";
import { SideBar } from "./SideBar";
import { DashboardLayoutProps } from "./types";

export default function DashboardLayout({ menus }: DashboardLayoutProps) {
  const opened = useLayoutStore((state) => !state.opened);

  return (
    <AppShell
      layout="alt"
      header={{ height: 60 }}
      navbar={{
        width: opened ? SIDEBAR_WIDTH : 60,
        breakpoint: "sm",
        collapsed: { desktop: false, mobile: !opened },
      }}
      padding="md"
    >
      <Header />
      <SideBar menus={menus} />
      <AppShell.Main>
        <Outlet />
      </AppShell.Main>
    </AppShell>
  );
}
