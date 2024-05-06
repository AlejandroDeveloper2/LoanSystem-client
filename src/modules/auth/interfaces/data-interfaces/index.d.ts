type UserRoleType = "ADMINISTRADOR" | "USUARIO";
type AuthStatusType = "authenticated" | "no authenticated" | "checking";

interface LoginFormData {
  email: string;
  password: string;
}

interface ChangePasswordFormData {
  password: string;
  confirmPassword: string;
}

interface RecoverPassFormData {
  email: string;
}

interface LoginResponse {
  token: string;
  refreshToken: string;
}

interface Auth {
  sub: string;
  state: boolean;
  roles: UserRoleType;
  exp: number;
  iat: number;
}

export type {
  UserRoleType,
  AuthStatusType,
  LoginFormData,
  ChangePasswordFormData,
  RecoverPassFormData,
  LoginResponse,
  Auth,
};
