/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect } from "react";
import { ViewGrid } from "iconoir-react";

import { getIndicatorCards } from "@modules/dashboard/constants/indicatorData";

import { useIndicatorsStore } from "@modules/dashboard/state-store";
import { useLoading, useModal } from "@modules/core/hooks";

import { CardList } from "@modules/core/components";
import { OperationalExpensesForm } from "@modules/dashboard/components";

const DashboardPage = (): JSX.Element => {
  const { generalIndicators, getGeneralIndicators } = useIndicatorsStore();
  const { loading, toggleLoading } = useLoading();

  const { ModalWindow, toggleModal: toggleOperationalExpensesModal } = useModal(
    "Filtrar gastos operativos"
  );

  useEffect(() => {
    getGeneralIndicators(toggleLoading);
  }, []);

  return (
    <>
      <ModalWindow>
        <OperationalExpensesForm />
      </ModalWindow>
      <h1 className="heading1">
        <ViewGrid />
        Panel de control
      </h1>
      <CardList>
        {getIndicatorCards(
          generalIndicators,
          loading,
          toggleOperationalExpensesModal
        ).map((indicator, i) => (
          <CardList.Card key={i} {...indicator} />
        ))}
      </CardList>
    </>
  );
};

export default DashboardPage;
