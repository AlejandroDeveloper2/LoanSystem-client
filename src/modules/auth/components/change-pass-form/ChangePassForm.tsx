import { useParams } from "react-router-dom";
import { RefreshDouble, Lock } from "iconoir-react";

import { ChangePasswordFormData } from "@modules/auth/interfaces/data-interfaces";

import {
  initialErrors,
  initialValues,
} from "@modules/auth/constants/changePassInitialValues";

import { useAuthStore } from "@modules/auth/state-store";
import { useForm, useLoading } from "@modules/core/hooks";
import { validationSchema } from "./ValidationSchema";

import { CustomLink, Form } from "@modules/core/components";

const ChangePassForm = (): JSX.Element => {
  const params = useParams();
  const urlToken = params as { token: string };

  const { changePassword } = useAuthStore();
  const { loading, toggleLoading } = useLoading();

  const action = () => {
    changePassword(formData, urlToken.token, toggleLoading);
  };

  const { formData, formRef, errors, handleChange, handleSubmit } =
    useForm<ChangePasswordFormData>(
      initialValues,
      initialErrors,
      "add",
      validationSchema,
      action
    );

  return (
    <Form
      formTitle="Restablecer contraseña"
      Icon={RefreshDouble}
      formRef={formRef}
      handleSubmit={handleSubmit}
    >
      <Form.FieldSet id="change-pass-input-set" setStyle="flexForm">
        <Form.Input
          id="password"
          name="password"
          label="Nueva contraseña"
          type="password"
          placeholder="Digita tu nueva contraseña"
          value={formData.password}
          errorMessage={errors["password"].message}
          Icon={Lock}
          onChange={handleChange}
        />
        <Form.Input
          id="confirmPassword"
          name="confirmPassword"
          label="Confirmar contraseña"
          type="password"
          placeholder="Confirma tu nueva contraseña"
          value={formData.confirmPassword}
          errorMessage={errors["confirmPassword"].message}
          Icon={Lock}
          onChange={handleChange}
        />
      </Form.FieldSet>
      <Form.IconButton
        id="button-recover"
        type="submit"
        title="Restablecer contraseña"
        Icon={RefreshDouble}
        label="Cambiar contraseña"
        variant="primary"
        loading={loading}
        onClick={() => {}}
      />
      <CustomLink
        label="Volver al inicio de sesión"
        linkText="Click aqui"
        to="/login"
      />
    </Form>
  );
};

export default ChangePassForm;
