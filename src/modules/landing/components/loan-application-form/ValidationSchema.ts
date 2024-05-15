import { ApplicationFormData } from "@modules/landing/interfaces/data-interfaces";
import {
  WrongInput,
  FieldErrorType,
} from "@modules/core/interfaces/data-interfaces";

import { FormValidations } from "@modules/core/utils/formValidations";

const formValidations = new FormValidations();

export const validationSchema = async (
  formData: ApplicationFormData,
  formRef: React.RefObject<HTMLFormElement>
): Promise<WrongInput> => ({
  fullName: await formValidations
    .validateEmptyFields(formData.fullName, "fullName", formRef)
    .then((wrongInput) => wrongInput)
    .catch((error: FieldErrorType) => error),
  phone: await formValidations
    .validateEmptyFields(formData.phone, "phone", formRef)
    .then((wrongInput) => wrongInput)
    .catch((error: FieldErrorType) => error),
  email: await formValidations
    .validateEmptyFields(formData.email, "email", formRef)
    .then(() => formValidations.validateEmail(formData.email, "email", formRef))
    .catch((error: FieldErrorType) => error),
  amount: await formValidations
    .validateEmptyFields(formData.amount, "amount", formRef)
    .then(() =>
      formValidations.validateNumericFields(
        parseInt(formData.amount),
        "amount",
        formRef
      )
    )
    .catch((error: FieldErrorType) => error),
  identification: await formValidations
    .validateEmptyFields(
      String(formData.identification),
      "identification",
      formRef
    )
    .then((wrongInput) => wrongInput)
    .catch((error: FieldErrorType) => error),
  workLetter: await formValidations
    .validateEmptyFields(String(formData.workLetter), "workLetter", formRef)
    .then((wrongInput) => wrongInput)
    .catch((error: FieldErrorType) => error),
  payrollStatements: await formValidations
    .validateEmptyFields(
      String(formData.payrollStatements),
      "payrollStatements",
      formRef
    )
    .then((wrongInput) => wrongInput)
    .catch((error: FieldErrorType) => error),
});
