import { HEADER_HEIGHT, SIDEBAR_WIDTH } from "@/configs/constants";
import { useAuthStore } from "@/stores/auth.store";
import { AppShell } from "@mantine/core";
import { Navigate, Outlet } from "react-router-dom";
import { Header } from "./Header";
import { useLayoutStore } from "./layout.store";
import { SideBar } from "./SideBar";

export default function DashboardLayout() {
  const user = useAuthStore((state) => state.user);

  const opened = useLayoutStore((state) => !state.opened);

  if (!user) return <Navigate to="/login" />;

  return (
    <AppShell
      layout="alt"
      header={{ height: HEADER_HEIGHT }}
      navbar={{
        width: opened ? SIDEBAR_WIDTH : HEADER_HEIGHT,
        breakpoint: "sm",
        collapsed: { desktop: false, mobile: !opened },
      }}
      padding="md"
    >
      <Header />
      <SideBar />
      <AppShell.Main>
        <Outlet />
      </AppShell.Main>
    </AppShell>
  );
}

export { Header };
