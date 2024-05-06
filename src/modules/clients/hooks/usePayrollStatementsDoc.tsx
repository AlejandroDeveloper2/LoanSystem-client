import { downloadPDFDoc } from "@modules/core/utils/helpers";
import { ClientsService } from "../services/Clients.service";
import { useClientsStore } from "../state-store";
import { useModal } from "@modules/core/hooks";
import { ExternalDocVisualizer } from "@modules/core/components";

const clientService = new ClientsService();

const downloadDoc = async (
  payrollStatements: string | null,
  clientName: string
): Promise<void> => {
  if (payrollStatements) {
    const payrollStatementsDoc = await clientService.getClientDoc(
      payrollStatements
    );
    downloadPDFDoc(
      payrollStatementsDoc,
      `Estados de cuenta nómina-${clientName}`
    );
  }
};

const usePayrollStatementsDoc = () => {
  const { client } = useClientsStore();

  const {
    ModalWindow: ModalPayrollStatements,
    toggleModal: togglePayrollStatements,
  } = useModal("Estados de cuenta");

  const ModalPayrollStatementsWindow = (): JSX.Element => {
    return (
      <ModalPayrollStatements>
        {client?.payrollStatements ? (
          <ExternalDocVisualizer
            docUrl={client?.payrollStatements}
            downloadFunction={() => {
              () =>
                downloadDoc(client?.payrollStatements, `${client?.fullName}`);
            }}
            loading={false}
            labelButton="Descargar documento"
            titleButton="Descargar documento"
          />
        ) : null}
      </ModalPayrollStatements>
    );
  };

  return { togglePayrollStatements, ModalPayrollStatementsWindow };
};

export default usePayrollStatementsDoc;
