/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import { Annotation, AnnotationFilters } from "../interfaces/data-interfaces";
import { IconOnlyButtonProps } from "@modules/core/interfaces/components-interfaces/ButtonProps";

import {
  useDialog,
  useFilter,
  useLoading,
  useModal,
} from "@modules/core/hooks";
import { useLoanStore } from "../state-store";
import {
  getDeleteAnnotationOption,
  getEditAnnotationOption,
} from "../utils/helpers";

const useAnotationsLoad = (
  currentPage: number,
  searchValue: string,
  recordsToList: string
) => {
  const params = useParams();
  const loanParam = params as { loanId: string };
  const [title, setTitle] = useState<string>("Nueva Anotación");

  const { loading, loadingMessage, toggleLoading } = useLoading();
  const { filtersData, chosenFilter, onChangeFilter, onChangeFilterInput } =
    useFilter<AnnotationFilters>({ startDate: "", endDate: "" }, "ASC");

  const { isModalVisible, elementId, ModalWindow, toggleModal } =
    useModal(title);

  const { loan, getLoan, getAllAnnotations, deleteAnnotation } = useLoanStore();

  useEffect(() => {
    setTitle(
      elementId === undefined ? "Nueva Anotación" : "Actualizar anotación"
    );
  }, [isModalVisible]);

  useEffect(() => {
    getAllAnnotations(
      loanParam.loanId,
      currentPage,
      recordsToList,
      searchValue,
      filtersData,
      chosenFilter,
      toggleLoading
    );
  }, [currentPage, filtersData, chosenFilter, recordsToList, searchValue]);

  useEffect(() => {
    getLoan(loanParam.loanId, toggleLoading);
  }, [loanParam]);

  const {
    DialogBox: DialogDelete,
    toggleDialog: toggleDialogDelete,
    updateElementId: updateAnnotationId,
  } = useDialog(
    "¿Desea eliminar la anotación?",
    "Eliminar anotación",
    deleteAnnotation
  );

  const getTableOptions = (annotation: Annotation): IconOnlyButtonProps[] => {
    return [
      getDeleteAnnotationOption(() => {
        toggleDialogDelete();
        updateAnnotationId(annotation.id);
      }),
      getEditAnnotationOption(() => {
        toggleModal(annotation.id);
      }),
    ];
  };

  return {
    loan,
    loadingData: {
      loading,
      loadingMessage,
    },
    filter: {
      filtersData,
      chosenFilter,
      onChangeFilter,
      onChangeFilterInput,
    },
    modalData: {
      elementId,
      ModalWindow,
      toggleModal,
    },
    DialogDelete,
    getTableOptions,
  };
};

export default useAnotationsLoad;
