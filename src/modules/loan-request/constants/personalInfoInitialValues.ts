import { WrongInput } from "@modules/core/interfaces/data-interfaces";
import { PersonalDataForm } from "@modules/loan-request/interfaces/data-interfaces";

export const initialValues: PersonalDataForm = {
  email: "",
  fullName: "",
  typeOfIdentification: "",
  identification: "",
  phone: "",
  civilStatus: "",
  profession: "",
  address: "",
  houseNumber: "",
  sector: "",
  city: "",
  typeOfResidence: "",
};

export const initialErrors: WrongInput = {
  email: {
    message: "",
    error: false,
  },
  fullName: {
    message: "",
    error: false,
  },
  typeOfIdentification: {
    message: "",
    error: false,
  },
  identification: {
    message: "",
    error: false,
  },
  phone: {
    message: "",
    error: false,
  },
  civilStatus: {
    message: "",
    error: false,
  },
  profession: {
    message: "",
    error: false,
  },
  address: {
    message: "",
    error: false,
  },
  houseNumber: {
    message: "",
    error: false,
  },
  sector: {
    message: "",
    error: false,
  },
  city: {
    message: "",
    error: false,
  },
  typeOfResidence: {
    message: "",
    error: false,
  },
};
