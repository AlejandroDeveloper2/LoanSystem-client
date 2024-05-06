type ScreenType = "mobile" | "tablet" | "desktop";
type FieldErrorType = {
  message: string;
  error: boolean;
};

interface NavItem {
  Icon: React.ForwardRefExoticComponent<Omit<React.SVGProps<SVGSVGElement>>>;
  title: string;
  to: string;
}

interface ServerResponse {
  message: string;
  backendMessage: string;
}

interface ResponseGlobal<T> {
  body: T;
}

interface Step {
  label: string;
  to: string;
}

interface IllustrationData {
  src: string;
  alt: string;
}

interface WrongInput {
  [x: string]: FieldErrorType;
}

interface Pagination {
  page: number;
  totalPages: number;
  totalElements: number;
  /* custom property */
  limit: string;
}

interface TableResponse<T> {
  body: T[];
  pagination: Pagination;
}

export type {
  ScreenType,
  FieldErrorType,
  NavItem,
  ServerResponse,
  ResponseGlobal,
  Step,
  IllustrationData,
  WrongInput,
  Pagination,
  TableResponse,
};
