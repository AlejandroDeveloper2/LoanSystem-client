import { Calendar } from "iconoir-react";

import { AnnotationFiltersProps } from "@modules/loan/interfaces/component-interfaces/AnnotationFiltersProps";

import { filterOptions } from "@modules/loan/constants/annotationTableData";

import { Filters } from "@modules/core/components";

const AnnotationFilters = ({ filter }: AnnotationFiltersProps): JSX.Element => {
  return (
    <Filters
      filterOptions={filterOptions}
      chosenFilter={filter.chosenFilter}
      onChangeFilter={filter.onChangeFilter}
    >
      <Filters.Input
        type="date"
        id="startDate"
        name="startDate"
        value={filter.filtersData.startDate}
        label="Desde"
        placeholder="Ingresa la fecha de inicio"
        Icon={Calendar}
        errorMessage=""
        onChange={filter.onChangeFilterInput}
      />
      <Filters.Input
        type="date"
        id="endDate"
        name="endDate"
        value={filter.filtersData.endDate}
        label="Hasta"
        placeholder="Ingresa la fecha final"
        Icon={Calendar}
        errorMessage=""
        onChange={filter.onChangeFilterInput}
      />
    </Filters>
  );
};

export default AnnotationFilters;
