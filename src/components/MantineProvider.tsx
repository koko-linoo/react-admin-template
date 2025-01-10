import "@mantine/core/styles.css";
import "@mantine/dates/styles.css";
import "@mantine/notifications/styles.css";
import "mantine-react-table/styles.css";

import { themeConfig } from "@/configs/theme";
import { createTheme, MantineProvider as Provider } from "@mantine/core";
import { ModalsProvider } from "@mantine/modals";
import { Notifications } from "@mantine/notifications";

type MantineProviderProps = {
  children: React.ReactNode;
};

const MantineProvider = ({ children }: MantineProviderProps) => {
  return (
    <Provider theme={createTheme(themeConfig)}>
      <ModalsProvider>
        <Notifications />
        {children}
      </ModalsProvider>
    </Provider>
  );
};

export default MantineProvider;
