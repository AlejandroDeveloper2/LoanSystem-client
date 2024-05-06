import { TextSquare } from "iconoir-react";

import { usePagination } from "@modules/core/hooks";
import { useAnnotationsLoad } from "@modules/loan/hooks";
import { useLoanStore } from "@modules/loan/state-store";

import { InfoSection } from "@modules/core/components";
import {
  AnnotationFilters,
  AnnotationForm,
  AnnotationTable,
} from "@modules/loan/components";

const LoanAnnotationPage = (): JSX.Element => {
  const { annotations, notePagination } = useLoanStore();
  const {
    searchValue,
    recordsToList,
    currentPage,
    firstShownRecord,
    lastShownRecord,
    onSearchValueChange,
    onRecordsToListChange,
    next,
    back,
  } = usePagination(notePagination);

  const {
    DialogDelete,
    loan,
    filter,
    loadingData,
    modalData,
    getTableOptions,
  } = useAnnotationsLoad(currentPage, searchValue, recordsToList);

  const annotation = annotations.filter(
    (annotation) => annotation.id === modalData.elementId
  )[0];

  return (
    <>
      <DialogDelete />
      <modalData.ModalWindow>
        <AnnotationForm
          annotation={annotation}
          mode={modalData.elementId === undefined ? "add" : "edit"}
          toggleModal={modalData.toggleModal}
        />
      </modalData.ModalWindow>
      <h1 className="heading1">
        <TextSquare />
        Anotaciones
      </h1>
      <InfoSection
        sectionTitle="Anotaciones y observaciones"
        labelId="Id del préstamo"
        link="/userPanel/loans"
        recordId={loan.id}
      />
      <AnnotationFilters filter={filter} />
      <AnnotationTable
        loading={loadingData.loading}
        loadingMessage={loadingData.loadingMessage}
        recordsToList={recordsToList}
        searchValue={searchValue}
        paginationConfig={{
          totalRecords: 0,
          firstShownRecord,
          lastShownRecord,
          next,
          back,
        }}
        toggleModal={modalData.toggleModal}
        getTableOptions={getTableOptions}
        onSearchValueChange={onSearchValueChange}
        onRecordsToListChange={onRecordsToListChange}
      />
    </>
  );
};

export default LoanAnnotationPage;
