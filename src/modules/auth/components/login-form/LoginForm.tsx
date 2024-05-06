import { Lock, LogIn, RefreshDouble, AtSign } from "iconoir-react";

import { LoginFormData } from "@modules/auth/interfaces/data-interfaces";

import {
  initialErrors,
  initialValues,
} from "@modules/auth/constants/loginInitialValues";

import { useAuthStore } from "@modules/auth/state-store";
import { useForm, useLoading } from "@modules/core/hooks";
import { validationSchema } from "./ValidationSchema";

import { CustomLink, Form } from "@modules/core/components";

const LoginForm = (): JSX.Element => {
  const { login } = useAuthStore();
  const { loading, toggleLoading } = useLoading();

  const action = () => {
    login(formData, toggleLoading);
  };

  const { formData, formRef, errors, handleChange, handleSubmit, clearForm } =
    useForm<LoginFormData>(
      initialValues,
      initialErrors,
      "add",
      validationSchema,
      action
    );

  return (
    <Form
      formTitle="Iniciar sesión"
      Icon={LogIn}
      formRef={formRef}
      handleSubmit={handleSubmit}
    >
      <Form.FieldSet id="login-input-set" setStyle="flexForm">
        <Form.Input
          id="email"
          name="email"
          label="Correo eléctronico"
          type="text"
          placeholder="Digita tu correo eléctronico"
          value={formData.email}
          errorMessage={errors["email"].message}
          Icon={AtSign}
          onChange={handleChange}
        />
        <Form.Input
          id="password"
          name="password"
          label="Contraseña"
          type="password"
          placeholder="Digita tu contraseña"
          value={formData.password}
          errorMessage={errors["password"].message}
          Icon={Lock}
          onChange={handleChange}
        />
      </Form.FieldSet>
      <Form.IconButton
        id="button-login"
        type="submit"
        title="Ingresar al sistema"
        Icon={LogIn}
        label="Iniciar sesión"
        variant="primary"
        loading={loading}
        onClick={() => {}}
      />
      <Form.IconButton
        id="button-clear"
        type="button"
        title="Limpiar formulario"
        Icon={RefreshDouble}
        label="Limpiar"
        variant="neutral"
        loading={false}
        onClick={clearForm}
      />
      <CustomLink
        label="¿Olvidaste tu contraseña?"
        linkText="Recupérala aqui"
        to="/recoverPassword"
      />
    </Form>
  );
};

export default LoginForm;
