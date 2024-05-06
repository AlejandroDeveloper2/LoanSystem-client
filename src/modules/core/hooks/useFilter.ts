import { ChangeEvent, useState } from "react";

const useFilter = <T>(filtersInputData: T, defaultFilter: string) => {
  const [filtersData, setFiltersData] = useState<T>(filtersInputData);
  const [chosenFilter, setChosenFilter] = useState<string>(defaultFilter);

  const updateFilterInput = (key: string, value: string): void => {
    setFiltersData({ ...filtersData, [key]: value });
  };

  const onChangeFilter = (filterParam: string) => {
    setChosenFilter(filterParam);
  };

  const onChangeFilterInput = (
    e: ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    setFiltersData({ ...filtersData, [e.target.name]: e.target.value });
  };

  return {
    filtersData,
    chosenFilter,
    updateFilterInput,
    onChangeFilter,
    onChangeFilterInput,
  };
};

export default useFilter;
