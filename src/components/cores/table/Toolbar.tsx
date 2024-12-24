import { Group, Paper, Text } from "@mantine/core";
import { ReactNode } from "react";
import { PageSizeSelect } from "./PageSizeSelect";

export type ToolbarProps = {
  rightSectioin?: ReactNode;
};

export function Toolbar({ rightSectioin }: ToolbarProps) {
  return (
    <Paper px="md" py="sm">
      <Group justify="space-between">
        <Group gap="sm" visibleFrom="xs">
          <Text c="greyscale.6" fz="12px">
            Show
          </Text>
          <PageSizeSelect />
          <Text c="greyscale.6" fz="12px">
            entries
          </Text>
        </Group>
        <Group>{rightSectioin}</Group>
      </Group>
    </Paper>
  );
}
