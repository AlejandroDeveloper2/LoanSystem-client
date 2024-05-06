import { useState } from "react";

import { useLoanRequestStore } from "@modules/loan-request/state-store";

import {
  ClientSearchValidation,
  SearchBox,
} from "@modules/loan-request/components";

const ValidationPage = (): JSX.Element => {
  const [click, setClick] = useState<boolean>(false);

  const { clientExists } = useLoanRequestStore();

  if (click) return <ClientSearchValidation clientFounded={clientExists} />;
  return (
    <>
      <SearchBox click={click} setClick={setClick} />
    </>
  );
};

export default ValidationPage;
