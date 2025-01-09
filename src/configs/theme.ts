import { generateColors } from "@mantine/colors-generator";
import { MantineThemeOverride } from "@mantine/core";
export const themeConfig: MantineThemeOverride = {
  primaryColor: "cyan",
  colors: {
    primary: generateColors("cyan"),
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
