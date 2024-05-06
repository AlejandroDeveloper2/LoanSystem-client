import { Calendar } from "iconoir-react";

import { filterOptions } from "@modules/clients/constants/clientTableData";
import { ClientFiltersProps } from "@modules/clients/interfaces/components-interfaces/ClientFiltersProps";

import { Filters } from "@modules/core/components";

const ClientFilters = ({ filter }: ClientFiltersProps): JSX.Element => {
  return (
    <Filters
      filterOptions={filterOptions}
      chosenFilter={filter.chosenFilter}
      onChangeFilter={filter.onChangeFilter}
    >
      <Filters.Input
        type="date"
        id="initialDate"
        name="initialDate"
        value={filter.filtersData.initialDate}
        label="Desde"
        placeholder="Ingresa la fecha de inicio"
        Icon={Calendar}
        errorMessage=""
        onChange={filter.onChangeFilterInput}
      />
      <Filters.Input
        type="date"
        id="finalDate"
        name="finalDate"
        value={filter.filtersData.finalDate}
        label="Hasta"
        placeholder="Ingresa la fecha final"
        Icon={Calendar}
        errorMessage=""
        onChange={filter.onChangeFilterInput}
      />
    </Filters>
  );
};

export default ClientFilters;
