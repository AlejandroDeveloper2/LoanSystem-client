import { lazy } from "react";

const ClientDetailPage = lazy(() => import("./ClientDetailPage"));
const ClientRequestDetailPage = lazy(() => import("./ClientRequestDetailPage"));
const ClientRequestsPage = lazy(() => import("./ClientRequestsPage"));
const ClientsPage = lazy(() => import("./ClientsPage"));
const DashboardPage = lazy(() => import("./DashboardPage"));
const LoanAnnotationPage = lazy(() => import("./LoanAnnotationPage"));
const LoanDetailPage = lazy(() => import("./LoanDetailPage"));
const LoansPage = lazy(() => import("./LoansPage"));
const UserProfilePage = lazy(() => import("./UserProfilePage"));

export {
  ClientDetailPage,
  ClientRequestDetailPage,
  ClientRequestsPage,
  ClientsPage,
  DashboardPage,
  LoanAnnotationPage,
  LoanDetailPage,
  LoansPage,
  UserProfilePage,
};
