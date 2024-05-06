import { Eye, Plus, Search } from "iconoir-react";

import { TableToolsProps } from "@modules/core/interfaces/components-interfaces/TableProps";

import { IconButton, InputText, Select } from "..";

import styles from "./Table.module.css";

const TableTools = ({
  recordsToList,
  onRecordsToListChange,
  addRecordFunction,
  buttonLabel,
  searchValue,
  searchLabel,
  hintText,
  onSearchChange,
}: TableToolsProps): JSX.Element => {
  return (
    <div className={styles.tableTools}>
      {addRecordFunction && buttonLabel ? (
        <IconButton
          Icon={Plus}
          label={buttonLabel}
          id="btn-add"
          type="button"
          title={`Agregar ${buttonLabel}`}
          variant="primary"
          loading={false}
          onClick={addRecordFunction}
        />
      ) : null}
      <Select
        id="records-to-list-select"
        name="recordsToList"
        label="Requistros a mostrar"
        value={recordsToList}
        options={[
          { label: "5", value: "5" },
          { label: "10", value: "10" },
          { label: "15", value: "15" },
          { label: "20", value: "20" },
        ]}
        errorMessage={null}
        Icon={Eye}
        onChange={onRecordsToListChange}
      />
      <InputText
        id="input-search"
        name="input-search"
        type="text"
        label={searchLabel}
        placeholder="Buscar registro"
        value={searchValue}
        errorMessage={null}
        userHint={hintText}
        Icon={Search}
        onChange={onSearchChange}
      />
    </div>
  );
};

export default TableTools;
