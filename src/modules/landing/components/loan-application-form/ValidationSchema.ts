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
  jobPlace: await formValidations
    .validateEmptyFields(formData.jobPlace, "jobPlace", formRef)
    .then((wrongInput) => wrongInput)
    .catch((error: FieldErrorType) => error),
  // monthlySalary: await formValidations
  //   .validateEmptyFields(formData.monthlySalary, "monthlySalary", formRef)
  //   .then(() =>
  //     formValidations.validateNumericFields(
  //       parseInt(formData.monthlySalary),
  //       "monthlySalary",
  //       formRef
  //     )
  //   )
  //   .catch((error: FieldErrorType) => error),
  // hasWorkLetter: await formValidations
  //   .validateEmptyFields(formData.hasWorkLetter, "hasWorkLetter", formRef)
  //   .then((wrongInput) => wrongInput)
  //   .catch((error: FieldErrorType) => error),
  // hasLastAccountStates: await formValidations
  //   .validateEmptyFields(
  //     formData.hasLastAccountStates,
  //     "hasLastAccountStates",
  //     formRef
  //   )
  //   .then((wrongInput) => wrongInput)
  //   .catch((error: FieldErrorType) => error),
});
