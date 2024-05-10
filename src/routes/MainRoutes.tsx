import { Navigate, Route, Routes } from "react-router-dom";

import { useAuthStore } from "@modules/auth/state-store";

import ProtectedRoutes from "./ProtectedRoutes";
import PublicRoutes from "./PublicRoutes";

import { LoadingWindow } from "@modules/core/components";

const MainRoutes = (): JSX.Element => {
  const { authStatus } = useAuthStore();

  if (authStatus === "checking") return <LoadingWindow />;
  return (
    <Routes>
      {authStatus === "authenticated" ? (
        <>
          <Route path="/*" element={<ProtectedRoutes />} />
          <Route path="/login" element={<Navigate to={`/userPanel`} />} />
          <Route path="/loanRequest/*" element={<Navigate to="/userPanel" />} />
        </>
      ) : (
        <>
          <Route path="/*" element={<PublicRoutes />} />
          <Route path="/userPanel/*" element={<Navigate to="/login" />} />
        </>
      )}
    </Routes>
  );
};

export default MainRoutes;
