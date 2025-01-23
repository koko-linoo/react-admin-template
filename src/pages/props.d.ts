export type FormProps = {
  loading?: boolean;
  onSubmit: (values: Record<string, unknown>) => void;
  onCancel: () => void;
  initialValues?: Record<string, unknown>;
};
