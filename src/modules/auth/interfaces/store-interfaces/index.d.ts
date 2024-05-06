import {
  AuthStatusType,
  LoginFormData,
  RecoverPassFormData,
  ChangePasswordFormData,
} from "../data-interfaces";

export interface AuthStore {
  auth: Auth | null;
  authStatus: AuthStatusType;
  login: (
    userCredencials: LoginFormData,
    toggleLoading: (message: string, isLoading: boolean) => void
  ) => Promise<void>;
  logout: () => void;
  recoverPassword: (
    userEmail: RecoverPassFormData,
    toggleLoading: (message: string, isLoading: boolean) => void
  ) => Promise<void>;
  changePassword: (
    newUserPassword: ChangePasswordFormData,
    token: string,
    toggleLoading: (message: string, isLoading: boolean) => void
  ) => Promise<void>;
  verifyAuthenticatedUser: () => Promise<void>;
}
