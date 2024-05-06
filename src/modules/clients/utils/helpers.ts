import { NavigateFunction } from "react-router-dom";

import {
  UpdateClientDataForm,
  Client,
} from "@modules/clients/interfaces/data-interfaces";
import { IconOnlyButtonProps } from "@modules/core/interfaces/components-interfaces/ButtonProps";

import { clientOptionsData } from "@modules/clients/constants/clientTableData";
import { formatDate } from "@modules/core/utils/helpers";

export const parseUpdatedClientInfo = (
  clientId: string,
  updatedClientData: UpdateClientDataForm
): Client => {
  const parsedClientData: Client = {
    id: clientId,
    email: updatedClientData.email,
    fullName: updatedClientData.fullName,
    typeOfIdentification: updatedClientData.typeOfIdentification,
    identification: updatedClientData.identification,
    phone: updatedClientData.phone,
    civilStatus: updatedClientData.civilStatus,
    profession: updatedClientData.profession,
    address: updatedClientData.address,
    houseNumber: updatedClientData.houseNumber,
    sector: updatedClientData.sector,
    city: updatedClientData.city,
    typeOfResidence: updatedClientData.typeOfResidence,
    workingInformation: {
      companyName: updatedClientData.companyName,
      phone: updatedClientData.companyPhone,
      address: updatedClientData.companyAddress,
      timeWorking: updatedClientData.timeWorking,
      position: updatedClientData.position,
      bossName: updatedClientData.bossName,
      bossPhone: updatedClientData.bossPhone,
      salary: updatedClientData.salary,
      paymentOfPayroll: updatedClientData.paymentOfPayroll,
      otherIncome: updatedClientData.otherIncome,
      description: updatedClientData.description,
    },
    bankAccount: {
      accountType: updatedClientData.accountType,
      bank: updatedClientData.bank,
      name: updatedClientData.name,
      accountNumber: updatedClientData.accountNumber,
    },
  };
  return parsedClientData;
};

export const getClientTableOptions = (
  client: Client,
  navigate: NavigateFunction
): IconOnlyButtonProps[] => {
  return clientOptionsData.map((option) => {
    if (option.id === "btn-edit")
      return {
        ...option,
        onClick: () => {
          navigate(`/userPanel/clients/${client.id}`);
        },
      };
    return option;
  });
};

const getMonthName = (formattedCurrentDate: string): string => {
  return formattedCurrentDate.split(" ")[3];
};

export const getCurrentMonthClients = (clients: Client[]): Client[] => {
  const formattedCurrentDate = new Date().toLocaleString("es-ES", {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
  });
  const currentMonth = getMonthName(formattedCurrentDate);
  const currentMonthClients = clients.filter(
    (client) => getMonthName(formatDate(`${client.createdAt}`)) === currentMonth
  );
  return currentMonthClients;
};
