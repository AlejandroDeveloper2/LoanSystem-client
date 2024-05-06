/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from "react";

import { useAuthStore } from "@modules/auth/state-store";

const useSession = (sessionTimer: number): void => {
  const [sessionInterval, setSessionInterval] = useState<number>(0);
  const { auth, verifyAuthenticatedUser } = useAuthStore();

  useEffect(() => {
    const checkSessionDuration = (): void => {
      if (sessionTimer === 0) {
        verifyAuthenticatedUser();
        return;
      }
      setSessionInterval(
        window.setInterval(() => {
          const currentDate = window.Math.floor(Date.now() / 1000);
          const expirationDate = auth ? auth.exp : 0;

          if (currentDate >= expirationDate) {
            verifyAuthenticatedUser();
          }
        }, sessionTimer)
      );
    };
    checkSessionDuration();
    return () => window.clearInterval(sessionInterval);
  }, [auth, sessionTimer]);
};

export default useSession;
