import { ReactNode } from "react";

type CardVariantType = "primary" | "neutral" | "warning" | "danger" | "light";

interface CardProps {
  title: string;
  Icon: React.ForwardRefExoticComponent<Omit<React.SVGProps<SVGSVGElement>>>;
  value: string;
  captionText: string;
  variant: CardVariantType;
  loading: boolean;
  loadingMessage?: string;
  moreDetailsLink?: string;
  onClick?: () => void;
}

interface CardListProps {
  children: ReactNode | ReactNode[];
}

export type { CardVariantType, CardProps, CardListProps };
