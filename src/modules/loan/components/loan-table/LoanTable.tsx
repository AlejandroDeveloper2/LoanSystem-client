import { columnKeys, headers } from "@modules/loan/constants/loansTableData";

import { LoanTableProps } from "@modules/loan/interfaces/component-interfaces/LoanTableProps";
import { Loan } from "@modules/loan/interfaces/data-interfaces";

import { useLoanStore } from "@modules/loan/state-store";
import { useModal } from "@modules/core/hooks";

import { Table } from "@modules/core/components";
import { LoanForm } from "@modules/loan/components";

const LoanTable = ({
  loading,
  loadingMessage,
  recordsToList,
  searchValue,
  paginationConfig,
  getTableOptions,
  onRecordsToListChange,
  onSearchValueChange,
}: LoanTableProps): JSX.Element => {
  const { loans, pagination } = useLoanStore();
  const { ModalWindow, toggleModal } = useModal("Nuevo préstamo");

  return (
    <>
      <ModalWindow>
        <LoanForm toggleModal={toggleModal} />
      </ModalWindow>
      <Table<Loan>
        headers={headers}
        recordsData={loans}
        getTableOptions={getTableOptions}
        columnKeys={columnKeys}
        recordTitle="Préstamo"
        paginationConfig={{
          ...paginationConfig,
          totalRecords: pagination.totalElements,
        }}
        isLoading={loading}
        loadingMessage={loadingMessage}
      >
        <Table.Tools
          recordsToList={recordsToList}
          searchValue={searchValue}
          searchLabel="Buscar préstamo"
          buttonLabel="Nuevo préstamo"
          hintText="Buscar por Identificación o nombre del cliente / monto"
          onRecordsToListChange={onRecordsToListChange}
          onSearchChange={onSearchValueChange}
          addRecordFunction={toggleModal}
        />
      </Table>
    </>
  );
};

export default LoanTable;
