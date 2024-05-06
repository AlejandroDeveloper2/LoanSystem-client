import { Calendar, Triangle } from "iconoir-react";

import { filterOptions } from "@modules/loan/constants/loansTableData";
import { LoanFiltersProps } from "@modules/loan/interfaces/component-interfaces/LoanFiltersProps";

import { Filters } from "@modules/core/components";

const LoanFilters = ({ filter }: LoanFiltersProps): JSX.Element => {
  return (
    <Filters
      filterOptions={filterOptions}
      chosenFilter={filter.chosenFilter}
      onChangeFilter={filter.onChangeFilter}
    >
      <Filters.Input
        type="date"
        id="loanDate"
        name="loanDate"
        value={filter.filtersData.loanDate}
        label="Fecha de creación"
        placeholder="Ingresa la fecha de creación del préstamo"
        Icon={Calendar}
        errorMessage=""
        onChange={filter.onChangeFilterInput}
      />
      <Filters.Select
        id="paymentCycle"
        name="paymentCycle"
        value={filter.filtersData.paymentCycle}
        label="Ciclo de pago"
        options={[
          { label: "Mensual", value: "Mensual" },
          { label: "Quincenal", value: "Quincenal" },
          { label: "Semanal", value: "Semanal" },
        ]}
        Icon={Triangle}
        errorMessage=""
        onChange={filter.onChangeFilterInput}
      />
    </Filters>
  );
};

export default LoanFilters;
