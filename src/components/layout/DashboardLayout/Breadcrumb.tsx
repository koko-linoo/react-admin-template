import { Anchor, Breadcrumbs, Text } from "@mantine/core";
import { Link, useLocation } from "react-router";

export function Breadcrumb() {
  const location = useLocation();
  const paths = [...new Set(location.pathname.split("/"))].filter(
    (path) => path
  );

  return (
    <Breadcrumbs separatorMargin={4} separator=">" fz={10}>
      {paths.map((path, index) => {
        if (index === paths.length - 1) {
          return (
            <Text key={path} fs="italic" tt="capitalize" size="xs">
              {path ? path : "Dashboard"}
            </Text>
          );
        }

        return (
          <Anchor
            key={path}
            tt="capitalize"
            size="xs"
            fs="italic"
            component={Link}
            to={`${paths.slice(1, index + 1).join("/")}`}
          >
            {path ? path : "Dashboard"}
          </Anchor>
        );
      })}
    </Breadcrumbs>
  );
}
