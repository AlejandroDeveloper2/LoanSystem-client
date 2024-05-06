/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect } from "react";
import { HandCash, Cash } from "iconoir-react";

import {
  initialErrors,
  initialValues,
} from "@modules/loan/constants/quotaInitialValues";

import { QuotaFormProps } from "@modules/loan/interfaces/component-interfaces/QuotaFormProps";
import { PartialPaymentDataForm } from "@modules/loan/interfaces/data-interfaces";

import { useForm, useLoading, useRadioButton } from "@modules/core/hooks";
import { useLoanStore } from "@modules/loan/state-store";
import { validationSchema } from "./ValidationSchema";

import { Form } from "@modules/core/components";

const QuotaForm = ({
  quotaId,
  quotaAmount,
  loan,
  toggleModal,
}: QuotaFormProps): JSX.Element => {
  function action() {
    payLoanQuota(quotaId, loan.id, formData, toggleLoading).then(() => {
      toggleModal();
    });
  }

  const { payLoanQuota } = useLoanStore();
  const { loading, toggleLoading } = useLoading();

  const {
    formData,
    formRef,
    errors,
    handleChange,
    handleSubmit,
    updateFormData,
    updateFormInitialValues,
  } = useForm<PartialPaymentDataForm>(
    initialValues,
    initialErrors,
    "add",
    validationSchema,
    action
  );
  const { radioButtonData, handleRadioChange } = useRadioButton<{
    option1: boolean;
    option2: boolean;
  }>(
    { option1: false, option2: true },
    "true",
    "isFullPayment",
    updateFormData
  );

  useEffect(() => {
    updateFormInitialValues({
      ...initialValues,
      isFullPayment: Boolean(radioButtonData.selectedValue === "true"),
      balance: radioButtonData.selectedValue === "true" ? quotaAmount : 0,
    });
  }, [radioButtonData.selectedValue]);

  return (
    <Form
      formTitle="Editar cuota"
      Icon={HandCash}
      formRef={formRef}
      handleSubmit={handleSubmit}
    >
      <Form.FieldSet id="quota-input-set" setStyle="flexForm">
        <Form.RadioButtonList
          id="isFullPayment"
          label="Tipo de pago *"
          errorMessage={errors["isFullPayment"].message}
          radioButtons={[
            {
              id: "option1",
              name: "isFullPayment",
              value: String(radioButtonData.option1),
              label: "Parcial",
              checked:
                radioButtonData.selectedValue ===
                String(radioButtonData.option1),
              onChange: handleRadioChange,
            },
            {
              id: "option2",
              name: "isFullPayment",
              value: String(radioButtonData.option2),
              label: "Completo",
              checked:
                radioButtonData.selectedValue ===
                String(radioButtonData.option2),
              onChange: handleRadioChange,
            },
          ]}
        />
        <Form.Input
          id="balance"
          name="balance"
          label="Monto de cuota *"
          type="number"
          placeholder="Digita el monto del préstamo"
          value={formData.balance}
          errorMessage={errors["balance"].message}
          Icon={Cash}
          onChange={handleChange}
          disabled={radioButtonData.selectedValue === "true"}
        />
      </Form.FieldSet>
      <Form.IconButton
        id="button-save-quota"
        type="submit"
        title="Agregar abono"
        Icon={Cash}
        label="Pagar cuota"
        variant="primary"
        loading={loading}
        onClick={() => {}}
      />
    </Form>
  );
};

export default QuotaForm;
