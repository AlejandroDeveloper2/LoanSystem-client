import { FormValidations } from "@modules/core/utils/formValidations";

import { OperationalExpensesFormData } from "@modules/dashboard/interfaces/data-interfaces";
import {
  FieldErrorType,
  WrongInput,
} from "@modules/core/interfaces/data-interfaces";

const formValidations = new FormValidations();

export const validationSchema = async (
  formData: OperationalExpensesFormData,
  formRef: React.RefObject<HTMLFormElement>
): Promise<WrongInput> => ({
  startDate: await formValidations
    .validateEmptyFields(formData.startDate, "startDate", formRef)
    .then((wrongInput) => wrongInput)
    .catch((error: FieldErrorType) => error),
  endDate: await formValidations
    .validateEmptyFields(formData.endDate, "endDate", formRef)
    .then((wrongInput) => wrongInput)
    .catch((error: FieldErrorType) => error),
});
