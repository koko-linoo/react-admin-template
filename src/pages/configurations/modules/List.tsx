import {
  Button,
  Checkbox,
  Divider,
  Flex,
  Group,
  Paper,
  Stack,
  Text,
  Title,
} from "@mantine/core";
import { CreateModuleForm } from "./Form";
import { useModuleList } from "./hooks";
import { Link } from "react-router";

export default function ModuleList() {
  const {
    isLoading,
    isUpdating,
    modules,
    isChecked,
    handleChange,
    handleSubmit,
  } = useModuleList();

  if (isLoading) return <div>Loading Modules</div>;

  return (
    <>
      <Stack gap="xs">
        <Group justify="space-between" align="center">
          <Title order={3}>Permissions</Title>
          <Flex gap="xs" align="center">
            <CreateModuleForm />
          </Flex>
        </Group>
        <Paper withBorder p="md">
          <Stack gap="xs">
            {modules?.map((module) => (
              <Stack key={module.id}>
                <Text fz="md" fw="bold">
                  {module.name}
                </Text>
                <Flex gap="xs" align="center">
                  {module.actions.map((action) => (
                    <Checkbox
                      size="xs"
                      key={action.id}
                      label={action.name}
                      value={action.name}
                      checked={isChecked(action, module.name)}
                      onChange={handleChange(module.name)}
                    />
                  ))}
                </Flex>
                <Divider />
              </Stack>
            ))}
            <Group justify="end" mt="md">
              <Button
                variant="outline"
                component={Link}
                to="/Dashboard/configurations/roles"
              >
                Cancel
              </Button>
              <Button loading={isUpdating} onClick={handleSubmit}>
                Save
              </Button>
            </Group>
          </Stack>
        </Paper>
      </Stack>
    </>
  );
}
