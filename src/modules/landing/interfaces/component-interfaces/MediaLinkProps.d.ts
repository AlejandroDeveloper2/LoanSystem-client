export interface MediaLinkProps {
  href: string;
  title: string;
  Icon: React.ForwardRefExoticComponent<Omit<React.SVGProps<SVGSVGElement>>>;
  external?: boolean;
}
