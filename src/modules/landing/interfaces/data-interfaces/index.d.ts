interface ApplicationFormData {
  fullName: string;
  phone: string;
  email: string;
  amount: string;
  identification: Blob | string;
  workLetter: Blob | string;
  payrollStatements: Blob | string;
}

export type { ApplicationFormData };
