import {
  WrongInput,
  FieldErrorType,
} from "@modules/core/interfaces/data-interfaces";
import { BankAccountDataForm } from "@modules/loan-request/interfaces/data-interfaces";

import { FormValidations } from "@modules/core/utils/formValidations";

const formValidations = new FormValidations();

export const validationSchema = async (
  formData: BankAccountDataForm,
  formRef: React.RefObject<HTMLFormElement>
): Promise<WrongInput> => ({
  accountType: await formValidations
    .validateEmptyFields(formData.accountType, "accountType", formRef)
    .then((wrongInput) => wrongInput)
    .catch((error: FieldErrorType) => error),
  bank: await formValidations
    .validateEmptyFields(formData.bank, "bank", formRef)
    .then((wrongInput) => wrongInput)
    .catch((error: FieldErrorType) => error),
  name: { message: "", error: false },
  accountNumber: await formValidations
    .validateEmptyFields(
      String(formData.accountNumber),
      "accountNumber",
      formRef
    )
    .then((wrongInput) => wrongInput)
    .catch((error: FieldErrorType) => error),
});
