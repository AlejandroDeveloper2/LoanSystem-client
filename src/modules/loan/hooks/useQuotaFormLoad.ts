/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from "react";

import { QuotaFormProps } from "../interfaces/component-interfaces/QuotaFormProps";
import { PartialPaymentDataForm } from "../interfaces/data-interfaces";
import { WrongInput } from "@modules/core/interfaces/data-interfaces";

import { initialErrors, initialValues } from "../constants/quotaInitialValues";

import { useLoanStore } from "../state-store";
import { useForm, useLoading, useRadioButton } from "@modules/core/hooks";

const useQuotaFormLoad = (
  { quotaId, quotaAmount, loan, toggleModal }: QuotaFormProps,
  validationSchema: (
    formData: PartialPaymentDataForm,
    formRef: React.RefObject<HTMLFormElement>
  ) => Promise<WrongInput>
) => {
  const [totalToPay, setTotalPay] = useState<number>(0);

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

  useEffect(() => {
    if (String(formData.balance) === "" || String(formData.interests) === "")
      setTotalPay(0);
    else
      setTotalPay(
        parseInt(String(formData.balance)) +
          parseInt(String(formData.interests))
      );
  }, [formData.balance, formData.interests]);

  const payment = loan?.paymentSchedules.filter(
    (payment) => payment.id === quotaId
  )[0];

  return {
    loading,
    formData,
    formRef,
    errors,
    radioButtonData,
    totalToPay,
    payment,
    handleChange,
    handleSubmit,
    handleRadioChange,
  };
};

export default useQuotaFormLoad;
