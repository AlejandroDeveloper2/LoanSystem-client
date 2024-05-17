/* eslint-disable react-hooks/exhaustive-deps */
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

import {
  FormStepData,
  RequestFormData,
  StepperFormNameType,
} from "@modules/loan-request/interfaces/data-interfaces";

import { initialStepperFormValues } from "@modules/loan-request/constants/formStepperInitialValues";

import { useLoanRequestStore } from "@modules/loan-request/state-store";

const useFormStepper = <T>(
  nextStep: string,
  formKey: StepperFormNameType,
  toggleLoading?: (message: string, isLoading: boolean) => void
) => {
  const navigate = useNavigate();
  const stepData = window.localStorage.getItem("stepFormData");
  const { createLoanRequest } = useLoanRequestStore();

  const stepDataLS: FormStepData = stepData
    ? window.JSON.parse(stepData)
    : {
        stepName: "/loanRequest/personalInfo",
        completedForms: 0,
        formData: initialStepperFormValues,
      };

  const [currentStepData, setCurrentStepData] = useState<FormStepData>(
    () => stepDataLS
  );

  const fillFormStepData = (
    formKey: StepperFormNameType,
    initialValues: T
  ): T => {
    const formData: T = Object(currentStepData.formData)[formKey]
      ? Object(currentStepData.formData)[formKey]
      : initialValues;
    return formData;
  };

  useEffect(() => {
    if (currentStepData.completedForms >= 5 && toggleLoading) {
      const parsedCurrentStepData: RequestFormData =
        currentStepData.formData as RequestFormData;
      createLoanRequest(parsedCurrentStepData, toggleLoading);
      navigate("/loanRequest");
      window.localStorage.clear();
      setCurrentStepData({
        stepName: "/loanRequest/personalInfo",
        completedForms: 0,
        formData: initialStepperFormValues,
      });
    }
  }, [currentStepData.formData]);

  const saveStepFormData = (formData: T): void => {
    const updatedStepData: FormStepData = {
      stepName: nextStep,
      completedForms: currentStepData.completedForms + 1,
      formData: { ...currentStepData.formData, [formKey]: { ...formData } },
    };

    window.localStorage.setItem(
      "stepFormData",
      window.JSON.stringify(updatedStepData)
    );
    setCurrentStepData(updatedStepData);
    if (formKey !== "personalReference") {
      navigate(nextStep);
    }
  };

  return {
    currentStepData,
    fillFormStepData,
    saveStepFormData,
  };
};
export default useFormStepper;
