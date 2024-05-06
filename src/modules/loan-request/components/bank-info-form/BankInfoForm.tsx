/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect } from "react";
import { Bank, CreditCard, FloppyDisk } from "iconoir-react";

import { BankAccountDataForm } from "@modules/loan-request/interfaces/data-interfaces";

import {
  initialErrors,
  initialValues,
} from "@modules/loan-request/constants/bankInfoInitialValues";

import { useFormStepper } from "@modules/loan-request/hooks";
import { useForm, useRadioButton } from "@modules/core/hooks";
import { validationSchema } from "./ValidationSchema";

import { Form } from "@modules/core/components";

const BankInfoForm = (): JSX.Element => {
  function action() {
    saveStepFormData(formData);
  }

  const { saveStepFormData, fillFormStepData } =
    useFormStepper<BankAccountDataForm>(
      "/loanRequest/personalReferences",
      "bankAccount"
    );

  const {
    formData,
    errors,
    formRef,
    updateFormData,
    updateFormInitialValues,
    handleChange,
    handleSubmit,
  } = useForm<BankAccountDataForm>(
    initialValues,
    initialErrors,
    "edit",
    validationSchema,
    action
  );

  const {
    radioButtonData: accountType,
    handleRadioChange: handleAccountTypeChange,
  } = useRadioButton<{
    accountType1: string;
    accountType2: string;
  }>(
    { accountType1: "Ahorro", accountType2: "Corriente" },
    fillFormStepData("bankAccount", initialValues).accountType,
    "accountType",
    updateFormData
  );

  const { radioButtonData: bank, handleRadioChange: handleBankChange } =
    useRadioButton<{
      bank1: string;
      bank2: string;
      bank3: string;
      bank4: string;
    }>(
      {
        bank1: "Popular",
        bank2: "Banreservas",
        bank3: "BHD",
        bank4: "Otro",
      },
      fillFormStepData("bankAccount", initialValues).bank,
      "bank",
      updateFormData
    );

  useEffect(() => {
    updateFormInitialValues(fillFormStepData("bankAccount", initialValues));
    formRef.current?.scrollIntoView({ behavior: "smooth" });
  }, []);

  return (
    <Form
      formTitle="Información cuenta bancaria"
      Icon={Bank}
      formRef={formRef}
      handleSubmit={handleSubmit}
    >
      <Form.FieldSet id="bank-info-input-set" setStyle="gridForm">
        <Form.RadioButtonList
          id="accountType"
          label="Tipo de cuenta *"
          errorMessage={errors["accountType"].message}
          radioButtons={[
            {
              id: "accountType1",
              name: "accountType",
              value: accountType.accountType1,
              label: "Ahorros / Nómina",
              checked: accountType.selectedValue === accountType.accountType1,
              onChange: handleAccountTypeChange,
            },
            {
              id: "accountType2",
              name: "accountType",
              value: accountType.accountType2,
              label: "Corriente",
              checked: accountType.selectedValue === accountType.accountType2,
              onChange: handleAccountTypeChange,
            },
          ]}
        />
        <Form.RadioButtonList
          id="bank"
          label="Banco *"
          errorMessage={errors["bank"].message}
          radioButtons={[
            {
              id: "bank1",
              name: "bank",
              value: bank.bank1,
              label: "Popular",
              checked: bank.selectedValue === bank.bank1,
              onChange: handleBankChange,
            },
            {
              id: "bank2",
              name: "bank",
              value: bank.bank2,
              label: "Banreservas",
              checked: bank.selectedValue === bank.bank2,
              onChange: handleBankChange,
            },
            {
              id: "bank3",
              name: "bank",
              value: bank.bank3,
              label: "BHD",
              checked: bank.selectedValue === bank.bank3,
              onChange: handleBankChange,
            },
            {
              id: "bank4",
              name: "bank",
              value: bank.bank4,
              label: "Otro",
              checked: bank.selectedValue === bank.bank4,
              onChange: handleBankChange,
            },
          ]}
        />
        <Form.Input
          id="name"
          name="name"
          label="Nombre del banco (Si escogió otro)"
          type="text"
          placeholder="Digita el nombre del banco"
          value={formData.name}
          errorMessage={errors.name.message}
          Icon={Bank}
          onChange={handleChange}
        />

        <Form.TextArea
          id="accountNumber"
          name="accountNumber"
          label="Número de cuenta *"
          placeholder="Describe los datos de tu cuenta"
          value={formData.accountNumber}
          errorMessage={errors["accountNumber"].message}
          userHint="(Esta cuenta podrá ser usada para depositar el monto de su préstamo solicitado.)"
          Icon={CreditCard}
          onChange={handleChange}
        />
      </Form.FieldSet>
      <Form.IconButton
        id="button-save-continue"
        type="submit"
        title="Guardar y continuar"
        Icon={FloppyDisk}
        label="Guardar y continuar"
        variant="primary"
        loading={false}
        onClick={() => {}}
      />
    </Form>
  );
};

export default BankInfoForm;
