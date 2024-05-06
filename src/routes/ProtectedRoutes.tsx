import { Suspense } from "react";
import { Route, Routes } from "react-router-dom";

import {
  ClientDetailPage,
  ClientRequestDetailPage,
  ClientRequestsPage,
  ClientsPage,
  DashboardPage,
  LoanDetailPage,
  LoansPage,
  UserProfilePage,
  LoanAnnotationPage,
} from "@pages/protected-pages";

import { ProtectedLayout } from "@layout/index";

import { LoadingWindow } from "@modules/core/components";

const ProtectedRoutes = (): JSX.Element => {
  return (
    <Suspense fallback={<LoadingWindow />}>
      <Routes>
        {/* Rutas protegidas  */}
        <Route path="/userPanel" element={<ProtectedLayout />}>
          <Route index element={<DashboardPage />} />
          <Route path="/userPanel/clients" element={<ClientsPage />} />
          <Route
            path="/userPanel/clients/:clientId"
            element={<ClientDetailPage />}
          />
          <Route
            path="/userPanel/loanRequests"
            element={<ClientRequestsPage />}
          />
          <Route
            path="/userPanel/loanRequests/:loanRequestId"
            element={<ClientRequestDetailPage />}
          />
          <Route path="/userPanel/loans" element={<LoansPage />} />
          <Route path="/userPanel/loans/:loanId" element={<LoanDetailPage />} />
          <Route path="/userPanel/userProfile" element={<UserProfilePage />} />
          <Route
            path="/userPanel/loans/annotations/:loanId"
            element={<LoanAnnotationPage />}
          />
        </Route>
      </Routes>
    </Suspense>
  );
};

export default ProtectedRoutes;
