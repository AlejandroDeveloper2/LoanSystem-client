import { FilterProps } from "@modules/core/interfaces/components-interfaces/FiltersProps";

import { IconButton, InputText, Select } from "..";

import styles from "./Filters.module.css";

const Filters = ({
  children,
  filterOptions,
  chosenFilter,
  onChangeFilter,
}: FilterProps): JSX.Element => {
  return (
    <div className={styles.filterContainer}>
      <div className={styles.filters}>
        <label className="paragraph">Filtros de busqueda:</label>
        <ul className={styles.filterList}>
          {filterOptions.map((filterOption) => (
            <li key={filterOption.id}>
              <IconButton
                Icon={filterOption.Icon}
                label={filterOption.label}
                id={filterOption.id}
                type={filterOption.type}
                title={filterOption.title}
                variant={
                  chosenFilter === filterOption.id ? "primary" : "neutral"
                }
                loading={filterOption.loading}
                onClick={() => onChangeFilter(filterOption.id)}
              />
            </li>
          ))}
        </ul>
      </div>
      <ul className={styles.filterList}>{children}</ul>
    </div>
  );
};

Filters.Input = InputText;
Filters.Select = Select;

export default Filters;
