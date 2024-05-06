/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect } from "react";
import { AtSign, EditPencil, User } from "iconoir-react";

import { ProfileDataForm } from "@modules/user/interfaces/data-interfaces";

import {
  getInitialValues,
  initialErrors,
} from "@modules/user/constants/profileInitialValues";

import { validationSchema } from "./ValidationSchema";
import { useUserStore } from "@modules/user/state-store";
import { useAuthStore } from "@modules/auth/state-store";
import { useForm, useLoading } from "@modules/core/hooks";

import { Form, Spinner } from "@modules/core/components";

const ProfileForm = (): JSX.Element => {
  const { user, updateUser, getUser } = useUserStore();
  const auth = useAuthStore((state) => state.auth);

  const { loading, toggleLoading } = useLoading();
  const {
    loading: loadingUser,
    loadingMessage,
    toggleLoading: toggleLoadingUser,
  } = useLoading();

  const action = () => {
    updateUser(auth?.sub ?? "", formData, toggleLoading);
  };

  const {
    formData,
    errors,
    formRef,
    handleChange,
    handleSubmit,
    updateFormInitialValues,
  } = useForm<ProfileDataForm>(
    getInitialValues(user),
    initialErrors,
    "edit",
    validationSchema,
    action
  );

  useEffect(() => {
    if (auth) getUser(auth.sub, toggleLoadingUser);
  }, [auth]);

  useEffect(() => {
    updateFormInitialValues(getInitialValues(user));
  }, [user]);

  return (
    <Form
      formTitle="Datos Básicos"
      Icon={User}
      formRef={formRef}
      handleSubmit={handleSubmit}
    >
      {loadingUser ? (
        <Spinner className="spinnerBarPrimary" message={loadingMessage} />
      ) : (
        <>
          <Form.FieldSet id="profile-input-set" setStyle="gridForm">
            <Form.Input
              id="firstName"
              name="firstName"
              label="Primer Nombre *"
              type="text"
              placeholder="Digita tu primer nombre "
              value={formData.firstName}
              errorMessage={errors["firstName"].message}
              Icon={User}
              onChange={handleChange}
            />
            <Form.Input
              id="lastName"
              name="lastName"
              label="Apellido *"
              type="text"
              placeholder="Digita tu apellido"
              value={formData.lastName}
              errorMessage={errors["lastName"].message}
              Icon={User}
              onChange={handleChange}
            />
            <Form.Input
              id="email"
              name="email"
              label="Correo *"
              type="text"
              placeholder="Digita tu correo"
              value={formData.email}
              errorMessage={errors["email"].message}
              Icon={AtSign}
              onChange={handleChange}
            />
          </Form.FieldSet>
          <Form.IconButton
            id="button-update-profile"
            type="submit"
            title="Actualizar perfil"
            Icon={EditPencil}
            label="Actualizar perfil"
            variant="warning"
            loading={loading}
            onClick={() => {}}
          />
        </>
      )}
    </Form>
  );
};

export default ProfileForm;
