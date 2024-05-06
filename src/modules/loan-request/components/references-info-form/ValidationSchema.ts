import {
  WrongInput,
  FieldErrorType,
} from "@modules/core/interfaces/data-interfaces";
import { ReferencesDataForm } from "@modules/loan-request/interfaces/data-interfaces";

import { FormValidations } from "@modules/core/utils/formValidations";

const formValidations = new FormValidations();

export const validationSchema = async (
  formData: ReferencesDataForm,
  formRef: React.RefObject<HTMLFormElement>
): Promise<WrongInput> => ({
  firstRelativeNames: await formValidations
    .validateEmptyFields(
      formData.firstRelativeNames,
      "firstRelativeNames",
      formRef
    )
    .then((wrongInput) => wrongInput)
    .catch((error: FieldErrorType) => error),
  firstRelativePhone: await formValidations
    .validateEmptyFields(
      formData.firstRelativePhone,
      "firstRelativePhone",
      formRef
    )
    .then((wrongInput) => wrongInput)
    .catch((error: FieldErrorType) => error),
  secondRelativeNames: await formValidations
    .validateEmptyFields(
      formData.secondRelativeNames,
      "secondRelativeNames",
      formRef
    )
    .then((wrongInput) => wrongInput)
    .catch((error: FieldErrorType) => error),
  secondRelativePhone: await formValidations
    .validateEmptyFields(
      formData.secondRelativePhone,
      "secondRelativePhone",
      formRef
    )
    .then((wrongInput) => wrongInput)
    .catch((error: FieldErrorType) => error),
  firstFriendNames: await formValidations
    .validateEmptyFields(formData.firstFriendNames, "firstFriendNames", formRef)
    .then((wrongInput) => wrongInput)
    .catch((error: FieldErrorType) => error),
  firstFriendPhone: await formValidations
    .validateEmptyFields(formData.firstFriendPhone, "firstFriendPhone", formRef)
    .then((wrongInput) => wrongInput)
    .catch((error: FieldErrorType) => error),
  secondFriendNames: await formValidations
    .validateEmptyFields(
      String(formData.secondFriendNames),
      "secondFriendNames",
      formRef
    )
    .then((wrongInput) => wrongInput)
    .catch((error: FieldErrorType) => error),
  secondFriendPhone: await formValidations
    .validateEmptyFields(
      String(formData.secondFriendPhone),
      "secondFriendPhone",
      formRef
    )
    .then((wrongInput) => wrongInput)
    .catch((error: FieldErrorType) => error),
  interaction: { message: "", error: false },
  referredName: { message: "", error: false },
  referredPhone: { message: "", error: false },
});
