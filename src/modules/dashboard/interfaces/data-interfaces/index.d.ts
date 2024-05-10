interface GeneralIndicators {
  totalClients: number;
  totalRequest: number;
  totalCapitalInvested: number;
  totalActiveLoans: number;
  totalProfits: number;
  totalLoansPaid: number;
  totalLoansInArrears: number;
  profitsCollected: number;
  legalExpensesTotal: number;
}

interface OperationalExpensesFormData {
  startDate: string;
  endDate: string;
}

export type { GeneralIndicators, OperationalExpensesFormData };
