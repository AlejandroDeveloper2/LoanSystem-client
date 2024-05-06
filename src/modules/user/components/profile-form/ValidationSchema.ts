import {
  WrongInput,
  FieldErrorType,
} from "@modules/core/interfaces/data-interfaces";
import { ProfileDataForm } from "@modules/user/interfaces/data-interfaces";

import { FormValidations } from "@modules/core/utils/formValidations";

const formValidations = new FormValidations();

export const validationSchema = async (
  formData: ProfileDataForm,
  formRef: React.RefObject<HTMLFormElement>
): Promise<WrongInput> => ({
  email: await formValidations
    .validateEmptyFields(String(formData.email), "email", formRef)
    .then(() => formValidations.validateEmail(formData.email, "email", formRef))
    .catch((error: FieldErrorType) => error),
  firstName: await formValidations
    .validateEmptyFields(formData.firstName, "firstName", formRef)
    .then((wrongInput) => wrongInput)
    .catch((error: FieldErrorType) => error),
  lastName: await formValidations
    .validateEmptyFields(String(formData.lastName), "lastName", formRef)
    .then((wrongInput) => wrongInput)
    .catch((error: FieldErrorType) => error),
});
