import { WrongInput } from "@modules/core/interfaces/data-interfaces";
import { OperationalExpensesFormData } from "../interfaces/data-interfaces";

export const initialValues: OperationalExpensesFormData = {
  startDate: "",
  endDate: "",
};

export const initialErrors: WrongInput = {
  startDate: {
    message: "",
    error: false,
  },
  endDate: {
    message: "",
    error: false,
  },
};
