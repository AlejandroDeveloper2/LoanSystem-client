import { WrongInput } from "@modules/core/interfaces/data-interfaces";
import { ApplicationFormData } from "../interfaces/data-interfaces";

export const initialValues: ApplicationFormData = {
  fullName: "",
  phone: "",
  email: "",
  amount: "",
  extraInfo:
    "-Salario Mensual:$--- ;\n-Lugar de trabajo:--- ;\n -¿Tiene carta de trabajo?:---;\n -¿Tiene los últimos 3 estados de cuenta de su nómina?:---;",
  // monthlySalary: "",
  // hasWorkLetter: "",
  // hasLastAccountStates: "",
};

export const initialErrors: WrongInput = {
  fullName: {
    message: "",
    error: false,
  },
  phone: {
    message: "",
    error: false,
  },
  email: {
    message: "",
    error: false,
  },
  amount: {
    message: "",
    error: false,
  },
  extraInfo: {
    message: "",
    error: false,
  },
  // monthlySalary: {
  //   message: "",
  //   error: false,
  // },
  // hasWorkLetter: {
  //   message: "",
  //   error: false,
  // },
  // hasLastAccountStates: {
  //   message: "",
  //   error: false,
  // },
};
