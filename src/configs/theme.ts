import { generateColors } from "@mantine/colors-generator";
import { MantineThemeOverride } from "@mantine/core";
export const themeConfig: MantineThemeOverride = {
  fontFamily: "Trebuchet MS",
  primaryColor: "primary",
  colors: {
    primary: generateColors("indigo"),
  },
  components: {
    Burger: {
      defaultProps: {},
    },
    NavLink: {
      defaultProps: {
        styles: {
          root: {
            padding: "4px 8px",
          },
          label: {
            fontSize: 12,
          },
        },
      },
    },
  },
};
