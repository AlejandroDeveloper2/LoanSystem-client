import {
  WrongInput,
  FieldErrorType,
} from "@modules/core/interfaces/data-interfaces";
import { ApproveLoanDataForm } from "@modules/loan/interfaces/data-interfaces";

import { FormValidations } from "@modules/core/utils/formValidations";

const formValidations = new FormValidations();

export const validationSchema = async (
  formData: ApproveLoanDataForm,
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
  interest: await formValidations
    .validateEmptyFields(String(formData.interest), "interest", formRef)
    .then(() =>
      formValidations.validateNumericFields(
        formData.interest,
        "interest",
        formRef
      )
    )
    .catch((error: FieldErrorType) => error),
  deadline: await formValidations
    .validateEmptyFields(String(formData.deadline), "deadline", formRef)
    .then(() =>
      formValidations.validateNumericFields(
        formData.interest,
        "deadline",
        formRef
      )
    )
    .catch((error: FieldErrorType) => error),
  firstPaymentDate: await formValidations
    .validateEmptyFields(formData.firstPaymentDate, "firstPaymentDate", formRef)
    .then((wrongInput) => wrongInput)
    .catch((error: FieldErrorType) => error),
  numberOfQuotas: await formValidations
    .validateEmptyFields(
      String(formData.numberOfQuotas),
      "numberOfQuotas",
      formRef
    )
    .then(() =>
      formValidations.validateNumericFields(
        formData.numberOfQuotas,
        "numberOfQuotas",
        formRef
      )
    )
    .catch((error: FieldErrorType) => error),
});
