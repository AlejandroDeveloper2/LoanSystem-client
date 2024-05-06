import { Table } from "@modules/core/components";
import {
  columnKeys,
  headers,
} from "@modules/loan/constants/annotationTableData";
import { AnnotationTableProps } from "@modules/loan/interfaces/component-interfaces/AnnotationTableProps";
import { Annotation } from "@modules/loan/interfaces/data-interfaces";
import { useLoanStore } from "@modules/loan/state-store";

const AnnotationTable = ({
  loading,
  loadingMessage,
  recordsToList,
  searchValue,
  paginationConfig,
  toggleModal,
  getTableOptions,
  onRecordsToListChange,
  onSearchValueChange,
}: AnnotationTableProps): JSX.Element => {
  const { annotations, notePagination } = useLoanStore();

  return (
    <Table<Annotation>
      headers={headers}
      recordsData={annotations}
      getTableOptions={getTableOptions}
      columnKeys={columnKeys}
      recordTitle="Anotación"
      paginationConfig={{
        ...paginationConfig,
        totalRecords: notePagination.totalElements,
      }}
      isLoading={loading}
      loadingMessage={loadingMessage}
    >
      <Table.Tools
        recordsToList={recordsToList}
        searchValue={searchValue}
        searchLabel="Buscar anotación"
        onRecordsToListChange={onRecordsToListChange}
        onSearchChange={onSearchValueChange}
        hintText="Buscar por titulo"
        buttonLabel="Nueva anotación"
        addRecordFunction={() => toggleModal()}
      />
    </Table>
  );
};

export default AnnotationTable;
