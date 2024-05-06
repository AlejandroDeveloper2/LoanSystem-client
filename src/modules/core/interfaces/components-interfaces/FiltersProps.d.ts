import { IconButtonProps } from "./ButtonProps";

export interface FilterProps {
  filterOptions: IconButtonProps[];
  chosenFilter: string;
  children?: React.ReactNode | React.ReactNode[];
  onChangeFilter: (filter: string) => void;
}
