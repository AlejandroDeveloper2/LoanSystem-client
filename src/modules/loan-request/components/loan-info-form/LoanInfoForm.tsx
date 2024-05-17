/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect } from "react";
import {
  HandCash,
  DollarCircle,
  Calendar,
  Cutlery,
  FloppyDisk,
} from "iconoir-react";

import { LoanDataForm } from "@modules/loan-request/interfaces/data-interfaces";
import { PaymentType } from "@modules/loan/interfaces/data-interfaces";

import {
  initialErrors,
  initialValues,
} from "@modules/loan-request/constants/loanInfoInitialValues";

import { useForm, useRadioButton } from "@modules/core/hooks";
import { useFormStepper } from "@modules/loan-request/hooks";
import { validationSchema } from "./ValidationSchema";

import { Form } from "@modules/core/components";

const LoanInfoForm = (): JSX.Element => {
  function action() {
    saveStepFormData(formData);
  }

  const { currentStepData, saveStepFormData, fillFormStepData } =
    useFormStepper<LoanDataForm>("/loanRequest/bankInfo", "loan");

  const {
    formData,
    errors,
    formRef,
    updateFormData,
    updateFormInitialValues,
    handleChange,
    handleSubmit,
  } = useForm<LoanDataForm>(
    initialValues,
    initialErrors,
    "edit",
    validationSchema,
    action
  );

  const { radioButtonData, handleRadioChange } = useRadioButton<{
    option1: PaymentType;
    option2: PaymentType;
    option3: PaymentType;
  }>(
    { option1: "Mensual", option2: "Quincenal", option3: "Semanal" },
    fillFormStepData("loan", initialValues).paymentCycle,
    "paymentCycle",
    updateFormData
  );

  useEffect(() => {
    updateFormInitialValues(fillFormStepData("loan", initialValues));
    formRef.current?.scrollIntoView({ behavior: "smooth" });
  }, []);

  return (
    <Form
      formTitle="Datos del préstamo"
      Icon={HandCash}
      formRef={formRef}
      handleSubmit={handleSubmit}
    >
      <Form.FieldSet id="loan-info-input-set" setStyle="gridForm">
        <Form.Input
          id="amount"
          name="amount"
          label="Monto solicitado *"
          type="number"
          placeholder="Digita el valor del monto que solicitas"
          value={formData.amount}
          errorMessage={errors["amount"].message}
          Icon={DollarCircle}
          onChange={handleChange}
        />
        <Form.RadioButtonList
          id="paymentCycle"
          label="Modalidad de pago *"
          errorMessage={errors["paymentCycle"].message}
          radioButtons={[
            {
              id: "option-1",
              name: "paymentCycle",
              value: radioButtonData.option1,
              label: "Mensual",
              checked:
                radioButtonData.option1 ===
                currentStepData.formData["workingInformation"].paymentOfPayroll,
              onChange: handleRadioChange,
              disabled: true,
            },
            {
              id: "option-2",
              name: "paymentCycle",
              value: radioButtonData.option2,
              label: "Quincenal",
              checked:
                radioButtonData.option2 ===
                currentStepData.formData["workingInformation"].paymentOfPayroll,
              onChange: handleRadioChange,
              disabled: true,
            },
            {
              id: "option-3",
              name: "paymentCycle",
              value: radioButtonData.option3,
              label: "Semanal",
              checked:
                radioButtonData.option3 ===
                currentStepData.formData["workingInformation"].paymentOfPayroll,
              onChange: handleRadioChange,
              disabled: true,
            },
          ]}
        />
        <Form.InputIndicator
          id="deadline"
          name="deadline"
          label="Plazo *"
          userHint="(Indique el tiempo a pagar en meses)"
          type="number"
          placeholder="Digita el tiempo"
          value={formData.deadline}
          indicatorLabel={"meses"}
          errorMessage={errors["deadline"].message}
          Icon={Calendar}
          onChange={handleChange}
        />
        <Form.Input
          id="description"
          name="description"
          label="Préstamo *"
          type="text"
          placeholder="Digita el destino del préstamo"
          value={formData.description}
          errorMessage={errors["description"].message}
          Icon={Cutlery}
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

export default LoanInfoForm;
