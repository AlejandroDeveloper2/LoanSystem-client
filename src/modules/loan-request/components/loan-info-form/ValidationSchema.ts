import {
  WrongInput,
  FieldErrorType,
} from "@modules/core/interfaces/data-interfaces";
import { LoanDataForm } from "@modules/loan-request/interfaces/data-interfaces";

import { FormValidations } from "@modules/core/utils/formValidations";

const formValidations = new FormValidations();

export const validationSchema = async (
  formData: LoanDataForm,
  formRef: React.RefObject<HTMLFormElement>
): Promise<WrongInput> => ({
  amount: await formValidations
    .validateEmptyFields(String(formData.amount), "amount", formRef)
    .then(() =>
      formValidations.validateNumericFields(formData.amount, "amount", formRef)
    )
    .catch((error: FieldErrorType) => error),
  paymentCycle: await formValidations
    .validateEmptyFields(formData.paymentCycle, "paymentCycle", formRef)
    .then((wrongInput) => wrongInput)
    .catch((error: FieldErrorType) => error),
  deadline: await formValidations
    .validateEmptyFields(String(formData.deadline), "deadline", formRef)
    .then(() =>
      formValidations.validateNumericFields(
        formData.deadline,
        "deadline",
        formRef
      )
    )
    .catch((error: FieldErrorType) => error),
  description: await formValidations
    .validateEmptyFields(formData.description, "description", formRef)
    .then((wrongInput) => wrongInput)
    .catch((error: FieldErrorType) => error),
});
