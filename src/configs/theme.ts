import { MantineThemeOverride } from "@mantine/core";

export const themeConfig: MantineThemeOverride = {
  primaryColor: "primary",
  colors: {
    primary: [
      "#fff5f5",
      "#ffe3e3",
      "#ffc9c9",
      "#ffa8a8",
      "#ff8787",
      "#ff6b6b",
      "#fa5252",
      "#f03e3e",
      "#e03131",
      "#c92a2a",
    ],
  },
  components: {
    Burger: {
      defaultProps: {
        color: "primary",
      },
    },
  },
};
