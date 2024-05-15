/// <reference types="vite/client" />
interface ImportMetaEnv {
  readonly VITE_API_URL_DEV: string;
  readonly VITE_API_URL_PRODUCTION: string;
  readonly VITE_API_URL_QA: string;
  readonly VITE_SERVICE_KEY: string;
  readonly VITE_TEMPLATE_KEY: string;
  readonly VITE_EMAIL_API_KEY: string;
}
