import { FormValidations } from "@modules/core/utils/formValidations";

import { AnnotationFormData } from "@modules/loan/interfaces/data-interfaces";
import {
  FieldErrorType,
  WrongInput,
} from "@modules/core/interfaces/data-interfaces";

const formValidations = new FormValidations();

export const validationSchema = async (
  formData: AnnotationFormData,
  formRef: React.RefObject<HTMLFormElement>
): Promise<WrongInput> => ({
  title: await formValidations
    .validateEmptyFields(formData.title, "title", formRef)
    .then((wrongInput) => wrongInput)
    .catch((error: FieldErrorType) => error),
  description: await formValidations
    .validateEmptyFields(formData.description, "description", formRef)
    .then((wrongInput) => wrongInput)
    .catch((error: FieldErrorType) => error),
});
