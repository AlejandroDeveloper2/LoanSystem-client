import { EditPencil, Lock } from "iconoir-react";

import { ChangePassDataForm } from "@modules/user/interfaces/data-interfaces";

import {
  initialErrors,
  initialValues,
} from "@modules/user/constants/updatePassInitialValues";

import { validationSchema } from "./ValidateSchema";
import { useUserStore } from "@modules/user/state-store";
import { useAuthStore } from "@modules/auth/state-store";
import { useForm, useLoading } from "@modules/core/hooks";

import { Form } from "@modules/core/components";

const UpdatePasswordForm = (): JSX.Element => {
  const { updateUserPassword } = useUserStore();
  const { logout } = useAuthStore();

  const { loading, toggleLoading } = useLoading();

  const action = () => {
    updateUserPassword(formData, toggleLoading).then(() => {
      logout();
    });
  };

  const { formData, errors, formRef, handleChange, handleSubmit } =
    useForm<ChangePassDataForm>(
      initialValues,
      initialErrors,
      "add",
      validationSchema,
      action
    );

  return (
    <Form
      formTitle="Cambiar contraseña"
      Icon={Lock}
      formRef={formRef}
      handleSubmit={handleSubmit}
    >
      <Form.FieldSet id="updatePass-input-set" setStyle="gridForm">
        <Form.Input
          id="currentPassword"
          name="currentPassword"
          label="Contraseña actual *"
          type="password"
          placeholder="Digita tu contraseña actual"
          value={formData.currentPassword}
          errorMessage={errors["currentPassword"].message}
          Icon={Lock}
          onChange={handleChange}
        />
        <Form.Input
          id="newPassword"
          name="newPassword"
          label="Nueva contraseña *"
          type="password"
          placeholder="Digita tu nueva contraseña "
          value={formData.newPassword}
          errorMessage={errors["newPassword"].message}
          Icon={Lock}
          onChange={handleChange}
        />
        <Form.Input
          id="confirmPassword"
          name="confirmPassword"
          label="Confirmar nueva contraseña *"
          type="password"
          placeholder="Confirmar nueva contraseña "
          value={formData.confirmPassword}
          errorMessage={errors["confirmPassword"].message}
          Icon={Lock}
          onChange={handleChange}
        />
      </Form.FieldSet>
      <Form.IconButton
        id="button-update-pass"
        type="submit"
        title="Actualizar contraseña"
        Icon={EditPencil}
        label="Actualizar contraseña"
        variant="warning"
        loading={loading}
        onClick={() => {}}
      />
    </Form>
  );
};

export default UpdatePasswordForm;
