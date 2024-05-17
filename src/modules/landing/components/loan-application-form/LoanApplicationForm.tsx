import {
  AlignCenter,
  AtSign,
  Coins,
  Message,
  Phone,
  Send,
  User,
} from "iconoir-react";

import { ApplicationFormData } from "@modules/landing/interfaces/data-interfaces";

import {
  initialValues,
  initialErrors,
} from "@modules/landing/constants/loanApplicationInitialValues";

import { useForm, useLoading } from "@modules/core/hooks";
import { useSendEmailStore } from "@modules/landing/state-store";
import { validationSchema } from "./ValidationSchema";

import { Form } from "@modules/core/components";

const LoanApplicationForm = (): JSX.Element => {
  const action = () => {
    sendEmail(formData, toggleLoading).then(() => {
      clearForm();
    });
  };

  const { sendEmail } = useSendEmailStore();
  const { loading, toggleLoading } = useLoading();

  const { formData, formRef, errors, handleChange, handleSubmit, clearForm } =
    useForm<ApplicationFormData>(
      initialValues,
      initialErrors,
      "add",
      validationSchema,
      action
    );

  return (
    <Form
      formTitle="Aplicación inicial"
      Icon={Message}
      formRef={formRef}
      handleSubmit={handleSubmit}
    >
      <Form.FieldSet id="loan-application-input-set" setStyle="gridForm">
        <Form.Input
          id="fullName"
          name="fullName"
          label="Nombre completo"
          type="text"
          placeholder="Digita tu nombre completo"
          value={formData.fullName}
          errorMessage={errors["fullName"].message}
          Icon={User}
          onChange={handleChange}
        />
        <Form.Input
          id="phone"
          name="phone"
          label="Número de celular"
          type="phone"
          placeholder="Digita tu número de celular"
          value={formData.phone}
          errorMessage={errors["phone"].message}
          Icon={Phone}
          onChange={handleChange}
        />
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
          id="amount"
          name="amount"
          label="Monto solicitado"
          type="number"
          placeholder="Digita el monto solicitado"
          value={formData.amount}
          errorMessage={errors["amount"].message}
          Icon={Coins}
          onChange={handleChange}
        />
        <Form.TextArea
          id="extraInfo"
          name="extraInfo"
          label="Información adicional (Completar)"
          placeholder="Describa su información"
          value={formData.extraInfo}
          errorMessage={errors["extraInfo"].message}
          Icon={AlignCenter}
          onChange={handleChange}
        />
        {/* <Form.Input
          id="monthlySalary"
          name="monthlySalary"
          label="Salario mensual"
          type="number"
          placeholder="Digita tu salario mensual"
          value={formData.monthlySalary}
          errorMessage={errors["monthlySalary"].message}
          Icon={Cash}
          onChange={handleChange}
        />
        <Form.Select
          id="hasWorkLetter"
          name="hasWorkLetter"
          label="¿Tiene carta de trabajo? *"
          value={formData.hasWorkLetter}
          errorMessage={errors["hasWorkLetter"].message}
          options={[
            { label: "Si", value: "Yes" },
            { label: "No", value: "Not" },
          ]}
          Icon={QuestionMark}
          onChange={handleChange}
        />
        <Form.Select
          id="hasLastAccountStates"
          name="hasLastAccountStates"
          label="¿Tiene los últimos 3 estados de cuenta de su nómina? *"
          value={formData.hasLastAccountStates}
          errorMessage={errors["hasLastAccountStates"].message}
          options={[
            { label: "Si", value: "Yes" },
            { label: "No", value: "Not" },
          ]}
          Icon={QuestionMark}
          onChange={handleChange}
        /> */}
      </Form.FieldSet>
      <Form.IconButton
        id="button-send"
        type="submit"
        title="Enviar pre-aplicación"
        Icon={Send}
        label="Enviar"
        variant="primary"
        loading={loading}
        onClick={() => {}}
      />
    </Form>
  );
};

export default LoanApplicationForm;
