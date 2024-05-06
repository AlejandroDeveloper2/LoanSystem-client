export interface InfoCardProps {
  Icon: React.ForwardRefExoticComponent<Omit<React.SVGProps<SVGSVGElement>>>;
  label: string;
  value: string | number;
}
