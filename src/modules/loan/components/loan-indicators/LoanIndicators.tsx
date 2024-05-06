import { LoanIndicatorsProps } from "@modules/loan/interfaces/component-interfaces/LoanIndicatorsProps";

import { useLoanStore } from "@modules/loan/state-store";
import { getIndicatorCards } from "./IndicatorsData";

import { CardList, IndicatorSection } from "@modules/core/components";

const LoanIndicators = ({ loading }: LoanIndicatorsProps): JSX.Element => {
  const { loanIndicators, paymentIndicators } = useLoanStore();

  return (
    <IndicatorSection>
      <CardList>
        {getIndicatorCards(loanIndicators, paymentIndicators, loading).map(
          (indicator, i) => (
            <CardList.Card key={i} {...indicator} />
          )
        )}
      </CardList>
    </IndicatorSection>
  );
};

export default LoanIndicators;
