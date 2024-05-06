/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect } from "react";
import { ViewGrid } from "iconoir-react";

import { getIndicatorCards } from "@modules/dashboard/constants/indicatorData";

import { useIndicatorsStore } from "@modules/dashboard/state-store";
import { useLoading } from "@modules/core/hooks";

import { CardList } from "@modules/core/components";

const DashboardPage = (): JSX.Element => {
  const { generalIndicators, getGeneralIndicators } = useIndicatorsStore();
  const { loading, toggleLoading } = useLoading();

  useEffect(() => {
    getGeneralIndicators(toggleLoading);
  }, []);

  return (
    <>
      <h1 className="heading1">
        <ViewGrid />
        Panel de control
      </h1>
      <CardList>
        {getIndicatorCards(generalIndicators, loading).map((indicator, i) => (
          <CardList.Card key={i} {...indicator} />
        ))}
      </CardList>
    </>
  );
};

export default DashboardPage;
