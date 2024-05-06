import { ChangeEvent } from "react";

import { LoanFilters } from "../data-interfaces";

export interface LoanFiltersProps {
  filter: {
    filtersData: LoanFilters;
    chosenFilter: string;
    onChangeFilter: (filter: string) => void;
    onChangeFilterInput: (
      e: ChangeEvent<HTMLInputElement | HTMLSelectElement>
    ) => void;
  };
}
