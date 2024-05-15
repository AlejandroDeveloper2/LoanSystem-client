/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect } from "react";
import {
  AtSign,
  Coins,
  Message,
  Phone,
  Send,
  Upload,
  User,
} from "iconoir-react";

import { ApplicationFormData } from "@modules/landing/interfaces/data-interfaces";

import {
  initialValues,
  initialErrors,
} from "@modules/landing/constants/loanApplicationInitialValues";

import { useForm, useInputFile, useLoading } from "@modules/core/hooks";
import { useSendEmailStore } from "@modules/landing/state-store";
import { validationSchema } from "./ValidationSchema";

import { Form } from "@modules/core/components";

const LoanApplicationForm = (): JSX.Element => {
  const action = () => {
    sendEmail(formRef, toggleLoading).then(() => {
      clearForm();
      clearId();
      clearWorkLetter();
      clearPayrollStatements();
    });
  };

  const { sendEmail } = useSendEmailStore();
  const { loading, toggleLoading } = useLoading();

  const {
    formData,
    formRef,
    errors,
    handleChange,
    handleSubmit,
    clearForm,
    updateFormInitialValues,
  } = useForm<ApplicationFormData>(
    initialValues,
    initialErrors,
    "add",
    validationSchema,
    action
  );

  const {
    file: identification,
    loadingDoc: loadingId,
    uploadFile: uploadId,
    clearFile: clearId,
  } = useInputFile();

  const {
    file: workLetter,
    loadingDoc: loadingWorkLetter,
    uploadFile: uploadWorkLetter,
    clearFile: clearWorkLetter,
  } = useInputFile();

  const {
    file: payrollStatements,
    loadingDoc: loadingPayrollStatements,
    uploadFile: uploadPayrollStatements,
    clearFile: clearPayrollStatements,
  } = useInputFile();

  useEffect(() => {
    updateFormInitialValues({
      ...formData,
      identification,
      workLetter,
      payrollStatements,
    });
  }, [identification, workLetter, payrollStatements]);

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
        <Form.InputFile
          Icon={Upload}
          value={identification}
          label="Subir cédula"
          id="identification"
          title="Seleccionar documento"
          fileName="cédula"
          variant="neutral"
          errorMessage={errors["identification"].message}
          loading={loadingId}
          onChange={uploadId}
        />
        <Form.InputFile
          Icon={Upload}
          value={workLetter}
          label="Subir carta de trabajo"
          id="workLetter"
          title="Seleccionar documento"
          fileName="carta-de-trabajo"
          variant="neutral"
          errorMessage={errors["workLetter"].message}
          loading={loadingWorkLetter}
          onChange={uploadWorkLetter}
        />
        <Form.InputFile
          Icon={Upload}
          value={payrollStatements}
          label="Subir estados de nómina"
          id="payrollStatements"
          title="Seleccionar documento"
          fileName="estados-de-cuentas-nómina"
          variant="neutral"
          errorMessage={errors["payrollStatements"].message}
          loading={loadingPayrollStatements}
          onChange={uploadPayrollStatements}
        />
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
