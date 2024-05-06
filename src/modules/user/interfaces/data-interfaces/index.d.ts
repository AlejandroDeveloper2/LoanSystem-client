type UserRoleType = "ADMINISTRADOR" | "USUARIO";

interface User {
  id: string;
  firstName: string;
  lastName: string;
  email: string;
  roles: UserRoleType;
  state: boolean;
  createdAt: string;
}

interface ProfileDataForm {
  firstName: string;
  lastName: string;
  email: string;
}

interface ChangePassDataForm {
  currentPassword: string;
  newPassword: string;
  confirmPassword: string;
}

export type { UserRoleType, User, ProfileDataForm, ChangePassDataForm };
