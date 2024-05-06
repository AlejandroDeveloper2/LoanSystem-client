import { ChangeEvent } from "react";

import { AnnotationFilters } from "../data-interfaces";

export interface AnnotationFiltersProps {
  filter: {
    filtersData: AnnotationFilters;
    chosenFilter: string;
    onChangeFilter: (filter: string) => void;
    onChangeFilterInput: (
      e: ChangeEvent<HTMLInputElement | HTMLSelectElement>
    ) => void;
  };
}
