import { ReactNode } from "react";

type FormStylesType = "flexForm" | "gridForm";

interface CustomFormProps {
  children: ReactNode | ReactNode[];
  formTitle: string;
  Icon: React.ForwardRefExoticComponent<Omit<React.SVGProps<SVGSVGElement>>>;
  formRef: React.RefObject<HTMLFormElement>;
  handleSubmit: (e: FormEvent<HTMLFormElement>) => void;
}

interface FieldSetProps {
  children: ReactNode | ReactNode[];
  id: string;
  setStyle: FormStylesType;
}

export type { FormStylesType, CustomFormProps, FieldSetProps };
