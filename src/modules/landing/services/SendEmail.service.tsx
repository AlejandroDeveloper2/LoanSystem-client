/* eslint-disable @typescript-eslint/no-explicit-any */
import { AxiosError } from "axios";
import emailJs from "@emailjs/browser";

import { ApplicationFormData } from "../interfaces/data-interfaces";

const SERVICE_KEY = import.meta.env.VITE_SERVICE_KEY;
const TEMPLATE_KEY = import.meta.env.VITE_TEMPLATE_KEY;
const EMAIL_API_KEY = import.meta.env.VITE_EMAIL_API_KEY;

export class SendEmailService {
  constructor() {}

  public async sendEmail(formParams: ApplicationFormData) {
    try {
      await emailJs.send(
        SERVICE_KEY,
        TEMPLATE_KEY,
        {
          fullName: formParams.fullName,
          phone: formParams.phone,
          email: formParams.email,
          amount: formParams.amount,
          jobPlace: formParams.jobPlace,
          // extraInfo: {
          //   jobPlace: formParams.jobPlace,
          //   monthlySalary: formParams.monthlySalary,
          //   hasWorkLetter: formParams.hasWorkLetter,
          //   hasLastAccountStates: formParams.hasLastAccountStates,
          // },
        },
        EMAIL_API_KEY
      );
    } catch (e: unknown) {
      const parsedError: AxiosError = e as AxiosError;
      throw new AxiosError(parsedError.message);
    }
  }
}
