import { ButtonVariantType } from "./ButtonProps";

type InputType = "text" | "number" | "date" | "phone" | "password";

interface InputBaseProps {
  children: React.ReactNode | React.ReactNode[];
  id: string;
  label: string;
  errorMessage: string | null;
  userHint?: string;
}

interface InputTextProps {
  id: string;
  type: InputType;
  name: string;
  label: string;
  placeholder: string;
  value: string | number;
  errorMessage: string | null;
  userHint?: string;
  disabled?: boolean;
  Icon: React.ForwardRefExoticComponent<Omit<React.SVGProps<SVGSVGElement>>>;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
}

interface SelectProps {
  id: string;
  name: string;
  label: string;
  value: string;
  options: { value: string; label: string }[];
  errorMessage: string | null;
  userHint?: string;
  disabled?: boolean;
  Icon: React.ForwardRefExoticComponent<Omit<React.SVGProps<SVGSVGElement>>>;
  onChange: (e: ChangeEvent<HTMLSelectElement>) => void;
}

interface RadioButtonListProps {
  id: string;
  label: string;
  errorMessage: string | null;
  userHint?: string;
  radioButtons: RadioButtonProps[];
}

interface RadioButtonProps {
  id: string;
  name: string;
  value: string;
  label: string;
  checked: boolean;
  disabled?: boolean;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
}

interface TextAreaProps {
  id: string;
  name: string;
  label: string;
  placeholder: string;
  value: string;
  errorMessage: string | nul;
  autoResize?: boolean;
  userHint?: string;
  disabled?: boolean;
  Icon: React.ForwardRefExoticComponent<Omit<React.SVGProps<SVGSVGElement>>>;
  onChange: (e: ChangeEvent<HTMLTextAreaElement>) => void;
}

interface InputIndicatorProps extends InputTextProps {
  indicatorLabel: string;
}

interface InputFileProps {
  id: string;
  value: Blob | string;
  title: string;
  label: string;
  variant: ButtonVariantType;
  fileName: string;
  loading: boolean;
  errorMessage: string | null;
  disabled?: boolean;
  Icon: React.ForwardRefExoticComponent<Omit<React.SVGProps<SVGSVGElement>>>;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
}

export type {
  InputType,
  InputBaseProps,
  InputTextProps,
  SelectProps,
  RadioButtonListProps,
  RadioButtonProps,
  TextAreaProps,
  InputIndicatorProps,
  InputFileProps,
};
