import { lazy } from "react";

const LoginPage = lazy(() => import("./LoginPage"));
const RecoverPasswordPage = lazy(() => import("./RecoverPasswordPage"));
const ChangePasswordPage = lazy(() => import("./ChangePasswordPage"));

export { LoginPage, RecoverPasswordPage, ChangePasswordPage };
