import {
  ChangePassDataForm,
  ProfileDataForm,
} from "@modules/user/interfaces/data-interfaces";

export interface UserStore {
  user: User | null;
  getUser: (
    userId: string,
    toggleLoading: (message: string, isLoading: boolean) => void
  ) => Promise<void>;
  updateUser: (
    userId: string,
    userData: ProfileDataForm,
    toggleLoading: (message: string, isLoading: boolean) => void
  ) => Promise<void>;
  updateUserPassword: (
    userData: ChangePassDataForm,
    toggleLoading: (message: string, isLoading: boolean) => void
  ) => Promise<void>;
}
