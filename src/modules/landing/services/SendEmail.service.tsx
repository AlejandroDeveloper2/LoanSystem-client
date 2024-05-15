import { AxiosError } from "axios";
import emailJs from "@emailjs/browser";

const SERVICE_KEY = import.meta.env.VITE_SERVICE_KEY;
const TEMPLATE_KEY = import.meta.env.VITE_TEMPLATE_KEY;
const EMAIL_API_KEY = import.meta.env.VITE_EMAIL_API_KEY;

export class SendEmailService {
  constructor() {}

  public async sendEmail(formRef: React.RefObject<HTMLFormElement>) {
    try {
      if (formRef.current)
        await emailJs.sendForm(
          SERVICE_KEY,
          TEMPLATE_KEY,
          formRef.current,
          EMAIL_API_KEY
        );
    } catch (e: unknown) {
      const parsedError: AxiosError = e as AxiosError;
      throw new AxiosError(parsedError.message);
    }
  }
}
