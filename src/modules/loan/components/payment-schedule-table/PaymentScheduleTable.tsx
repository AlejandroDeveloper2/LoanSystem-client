import { PaymentSchedule } from "@modules/loan/interfaces/data-interfaces";
import { IconOnlyButtonProps } from "@modules/core/interfaces/components-interfaces/ButtonProps";

import {
  columnKeys,
  headers,
} from "@modules/loan/constants/paymentScheduleTableData";

import { useLoading, useModal } from "@modules/core/hooks";
import { useLoanStore } from "@modules/loan/state-store";
import {
  getPayQuotaOption,
  getViewTicketOption,
} from "@modules/loan/utils/helpers";

import { ExternalDocVisualizer, Table } from "@modules/core/components";
import { QuotaForm } from "..";

const PaymentScheduleTable = (): JSX.Element => {
  const { loan, getPaymentTicket, ticketUrl } = useLoanStore();

  const { loading: loadingTicket, toggleLoading: toggleLoadingTicket } =
    useLoading();
  const { elementId, ModalWindow, toggleModal } = useModal("Visualizar Ticket");
  const {
    elementId: quotaId,
    ModalWindow: ModalEditAmount,
    toggleModal: toggleModalEditAmount,
  } = useModal("Editar monto de cuota");

  const getTableOptions = (
    paymentSchedule: PaymentSchedule
  ): IconOnlyButtonProps[] => {
    return [
      getViewTicketOption(paymentSchedule, loan, () => {
        toggleModal(paymentSchedule.id);
        getPaymentTicket(
          loan.id,
          paymentSchedule.id,
          "Visualize",
          toggleLoadingTicket
        );
      }),
      getPayQuotaOption(paymentSchedule, loan, () => {
        toggleModalEditAmount(paymentSchedule.id);
      }),
    ];
  };

  const currentQuotaAmount = loan.paymentSchedules.filter(
    (payment) => payment.id === quotaId
  )[0]?.amount;

  return (
    <>
      <ModalEditAmount>
        <QuotaForm
          quotaId={`${quotaId}`}
          quotaAmount={currentQuotaAmount}
          loan={loan}
          toggleModal={toggleModalEditAmount}
        />
      </ModalEditAmount>
      <ModalWindow>
        <ExternalDocVisualizer
          docUrl={ticketUrl}
          loading={loadingTicket}
          labelButton="Descargar ticket"
          titleButton="Descargar ticket"
          downloadFunction={() => {
            getPaymentTicket(
              loan.id,
              `${elementId}`,
              "Download",
              toggleLoadingTicket
            );
          }}
        />
      </ModalWindow>
      <Table<PaymentSchedule>
        headers={headers}
        recordsData={loan.paymentSchedules}
        columnKeys={columnKeys}
        recordTitle="Cuota #"
        recordTitleKey="quotaNumber"
        getTableOptions={getTableOptions}
      />
    </>
  );
};

export default PaymentScheduleTable;
