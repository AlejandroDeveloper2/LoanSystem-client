import { AtSign, Send, Lock } from "iconoir-react";

import { RecoverPassFormData } from "@modules/auth/interfaces/data-interfaces";

import {
  initialErrors,
  initialValues,
} from "@modules/auth/constants/recoverPassInitialValues";

import { useAuthStore } from "@modules/auth/state-store";
import { useForm, useLoading } from "@modules/core/hooks";
import { validationSchema } from "./ValidationSchema";

import { CustomLink, Form } from "@modules/core/components";

const RecoverPassForm = (): JSX.Element => {
  const { recoverPassword } = useAuthStore();
  const { loading, toggleLoading } = useLoading();

  const action = () => {
    recoverPassword(formData, toggleLoading);
  };

  const { formData, formRef, errors, handleChange, handleSubmit } =
    useForm<RecoverPassFormData>(
      initialValues,
      initialErrors,
      "add",
      validationSchema,
      action
    );

  return (
    <Form
      formTitle="Recuperar contraseña"
      Icon={Lock}
      formRef={formRef}
      handleSubmit={handleSubmit}
    >
      <Form.FieldSet id="login-input-set" setStyle="flexForm">
        <Form.Input
          id="email"
          name="email"
          label="Correo eléctronico"
          type="text"
          placeholder="Digita tu correo"
          value={formData.email}
          errorMessage={errors["email"].message}
          Icon={AtSign}
          onChange={handleChange}
        />
      </Form.FieldSet>
      <Form.IconButton
        id="button-send"
        type="submit"
        title="Enviar solicitud de recuperación"
        Icon={Send}
        label="Enviar solicitud"
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

export default RecoverPassForm;
