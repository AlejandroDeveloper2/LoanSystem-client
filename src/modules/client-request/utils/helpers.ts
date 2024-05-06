import { NavigateFunction } from "react-router-dom";
import { toast } from "react-toastify";

import {
  ClientRequestData,
  ParsedClientRequestData,
} from "@modules/client-request/interfaces/data-interfaces";
import { Auth, UserRoleType } from "@modules/auth/interfaces/data-interfaces";
import { IconOnlyButtonProps } from "@modules/core/interfaces/components-interfaces/ButtonProps";

import { clientRequestOptionsData } from "@modules/client-request/constants/clientRequestTableData";
import { StepperFormNameType } from "@modules/loan-request/interfaces/data-interfaces";

export const copyToClipboard = (
  textToCopy: string,
  successMessage: string
): void => {
  window.navigator.clipboard.writeText(textToCopy);
  toast.success(successMessage);
};

export const getClientRequestTableOptions = (
  request: ParsedClientRequestData,
  navigate: NavigateFunction,
  auth: Auth | null,
  toggleDialog: () => void,
  updateElementId: (id: string) => void,
  toggleRejectDialog: () => void,
  updateRejectElementId: (id: string) => void
): IconOnlyButtonProps[] => {
  const userRole: UserRoleType = auth ? auth.roles : "ADMINISTRADOR";

  return clientRequestOptionsData.map((option) => {
    if (option.id === "btn-view")
      return {
        ...option,
        onClick: () => navigate(`/userPanel/loanRequests/${request.id}`),
      };
    if (option.id === "btn-approve")
      return {
        ...option,
        disabled: request.state === "Aprobado" ? true : undefined,
        onClick: () => {
          toggleDialog();
          updateElementId(request.id);
        },
      };
    return {
      ...option,
      disabled:
        request.state === "Rechazado"
          ? true
          : userRole === "ADMINISTRADOR"
          ? undefined
          : true,
      onClick: () => {
        toggleRejectDialog();
        updateRejectElementId(request.id);
      },
    };
  });
};

export const fillForm = <T>(
  requestInfo: ClientRequestData | null,
  key: StepperFormNameType,
  initialValues: T
): T => {
  if (requestInfo) {
    return Object({
      ...requestInfo[key],
    });
  }
  return initialValues;
};
