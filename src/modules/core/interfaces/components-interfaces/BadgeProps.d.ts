type BadgeVariantType = "primary" | "danger" | "warning" | "light" | "neutral";

interface BadgeProps {
  label: string;
  variant: BadgeVariantType;
}

export type { BadgeVariantType, BadgeProps };
