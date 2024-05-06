import { WrongInput } from "@modules/core/interfaces/data-interfaces";
import { UploadDocFormData } from "../interfaces/data-interfaces";

export const initialValues: UploadDocFormData = {
  clientDoc: "",
  fileType: "identificationCard",
};

export const initialErrors: WrongInput = {
  clientDoc: {
    message: "",
    error: false,
  },
  fileType: {
    message: "",
    error: false,
  },
};
