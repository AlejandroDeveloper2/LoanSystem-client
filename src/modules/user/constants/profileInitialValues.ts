import { WrongInput } from "@modules/core/interfaces/data-interfaces";
import {
  ProfileDataForm,
  User,
} from "@modules/user/interfaces/data-interfaces";

export const getInitialValues = (user: User | null): ProfileDataForm => ({
  firstName: user ? user.firstName : "",
  lastName: user ? user.lastName : "",
  email: user ? user.email : "",
});

export const initialErrors: WrongInput = {
  firstName: {
    message: "",
    error: false,
  },
  lastName: {
    message: "",
    error: false,
  },
  email: {
    message: "",
    error: false,
  },
};
