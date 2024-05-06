import { WrongInput } from "@modules/core/interfaces/data-interfaces";
import { UploadDocFormData } from "../interfaces/data-interfaces";

export const initialValues: UploadDocFormData = {
  promissoryNote: "",
  fileType: "simple",
};

export const initialErrors: WrongInput = {
  promissoryNote: {
    message: "",
    error: false,
  },
  fileType: {
    message: "",
    error: false,
  },
};
