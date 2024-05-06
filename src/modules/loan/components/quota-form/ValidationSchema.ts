import {
  WrongInput,
  FieldErrorType,
} from "@modules/core/interfaces/data-interfaces";
import { PartialPaymentDataForm } from "@modules/loan/interfaces/data-interfaces";

import { FormValidations } from "@modules/core/utils/formValidations";

const formValidations = new FormValidations();
export const validationSchema = async (
  formData: PartialPaymentDataForm,
  formRef: React.RefObject<HTMLFormElement>
): Promise<WrongInput> => ({
  balance: await formValidations
    .validateEmptyFields(String(formData.balance), "balance", formRef)
    .then(() =>
      formValidations.validateNumericFields(
        formData.balance,
        "balance",
        formRef
      )
    )
    .catch((error: FieldErrorType) => error),
  isFullPayment: await formValidations
    .validateEmptyFields(
      String(formData.isFullPayment),
      "isFullPayment",
      formRef
    )
    .then((wrongInput) => wrongInput)
    .catch((error: FieldErrorType) => error),
});
