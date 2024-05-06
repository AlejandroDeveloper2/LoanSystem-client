import { ReactNode } from "react";

type ButtonType = "button" | "submit";
type ButtonVariantType =
  | "primary"
  | "danger"
  | "secondary"
  | "warning"
  | "neutral"
  | "outline";

interface BaseButtonProps {
  id: string;
  type: ButtonType;
  title: string;
  variant: ButtonVariantType;
  loading: boolean;
  disabled?: boolean;
  children?: ReactNode | ReactNode[];
  onClick: () => void;
}

interface LabeledButtonProps extends BaseButtonProps {
  label: string;
}

interface IconButtonProps extends LabeledButtonProps {
  Icon: React.ForwardRefExoticComponent<Omit<React.SVGProps<SVGSVGElement>>>;
}

interface IconOnlyButtonProps extends BaseButtonProps {
  Icon: React.ForwardRefExoticComponent<Omit<React.SVGProps<SVGSVGElement>>>;
}

export type {
  ButtonType,
  ButtonVariantType,
  BaseButtonProps,
  LabeledButtonProps,
  IconButtonProps,
  IconOnlyButtonProps,
};
