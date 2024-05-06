import { LoginFormData } from "@modules/auth/interfaces/data-interfaces";
import {
  WrongInput,
  FieldErrorType,
} from "@modules/core/interfaces/data-interfaces";

import { FormValidations } from "@modules/core/utils/formValidations";

const formValidations = new FormValidations();

export const validationSchema = async (
  formData: LoginFormData,
  formRef: React.RefObject<HTMLFormElement>
): Promise<WrongInput> => ({
  email: await formValidations
    .validateEmptyFields(formData.email, "email", formRef)
    .then((wrongInput) => wrongInput)
    .catch((error: FieldErrorType) => error),
  password: await formValidations
    .validateEmptyFields(formData.password, "password", formRef)
    .then((wrongInput) => wrongInput)
    .catch((error: FieldErrorType) => error),
});
