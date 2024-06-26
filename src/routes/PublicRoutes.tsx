import { Suspense } from "react";
import { Route, Routes, useLocation } from "react-router-dom";

import {
  LoginPage,
  RecoverPasswordPage,
  ChangePasswordPage,
} from "@pages/public-pages/auth-pages";

import {
  ValidationPage,
  PersonalInfoPage,
  WorkInfoPage,
  LoanInfoPage,
  BankInfoPage,
  ReferencesInfoPage,
} from "@pages/public-pages/loan-request-pages";

import LandingPage from "@pages/public-pages/landing-page/LandingPage";

import { LandingPageLayout, PublicLayout } from "@layout/index";

import { LoadingWindow } from "@modules/core/components";

const PublicRoutes = (): JSX.Element => {
  const location = useLocation();

  return (
    <Suspense fallback={<LoadingWindow />}>
      <Routes>
        {/* Rutas publicas  */}
        <Route
          path="/"
          element={
            location.pathname === "/" ? <LandingPageLayout /> : <PublicLayout />
          }
        >
          <Route index element={<LandingPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/recoverPassword" element={<RecoverPasswordPage />} />
          <Route
            path="/changePassword/:token"
            element={<ChangePasswordPage />}
          />
        </Route>
        {/* Rutas solicitud de prestamo */}
        <Route path="/loanRequest" element={<PublicLayout />}>
          <Route index element={<ValidationPage />} />
          <Route
            path="/loanRequest/personalInfo"
            element={<PersonalInfoPage />}
          />
          <Route path="/loanRequest/workInfo" element={<WorkInfoPage />} />
          <Route path="/loanRequest/loanInfo" element={<LoanInfoPage />} />
          <Route path="/loanRequest/bankInfo" element={<BankInfoPage />} />
          <Route
            path="/loanRequest/referencesInfo"
            element={<ReferencesInfoPage />}
          />
        </Route>
      </Routes>
    </Suspense>
  );
};

export default PublicRoutes;
