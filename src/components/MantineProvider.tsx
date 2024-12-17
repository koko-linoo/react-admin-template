import "@mantine/core/styles.css";
import "@mantine/dates/styles.css";
import "@mantine/notifications/styles.css";

import { themeConfig } from "@/configs/theme";
import { createTheme, MantineProvider as Provider } from "@mantine/core";
import { ModalsProvider } from "@mantine/modals";
import { Notifications } from "@mantine/notifications";
import { useThemeStore } from "@/stores/theme.store";

type MantineProviderProps = {
  children: React.ReactNode;
};

const MantineProvider = ({ children }: MantineProviderProps) => {
  const themeMode = useThemeStore((state) => state.themeMode);

  return (
    <Provider theme={createTheme(themeConfig)} forceColorScheme={themeMode}>
      <ModalsProvider>
        <Notifications />
        {children}
      </ModalsProvider>
    </Provider>
  );
};

export default MantineProvider;
