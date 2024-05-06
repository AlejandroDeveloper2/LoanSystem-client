import { UploadDocFormData } from "@modules/clients/interfaces/data-interfaces";
import {
  FieldErrorType,
  WrongInput,
} from "@modules/core/interfaces/data-interfaces";

import { FormValidations } from "@modules/core/utils/formValidations";

const formValidations = new FormValidations();
export const validationSchema = async (
  formData: UploadDocFormData,
  formRef: React.RefObject<HTMLFormElement>
): Promise<WrongInput> => ({
  promissoryNote: await formValidations
    .validateEmptyFields(String(formData.clientDoc), "clientDoc", formRef)
    .then((wrongInput) => wrongInput)
    .catch((error: FieldErrorType) => error),
  fileType: await formValidations
    .validateEmptyFields(String(formData.fileType), "fileType", formRef)
    .then((wrongInput) => wrongInput)
    .catch((error: FieldErrorType) => error),
});
