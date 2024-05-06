import { useState } from "react";
import { Hashtag, Search } from "iconoir-react";

import { SearchBoxProps } from "@modules/loan-request/interfaces/components-interfaces/SearchBoxProps";

import { useLoanRequestStore } from "@modules/loan-request/state-store";
import { useLoading } from "@modules/core/hooks";

import { IconOnlyButton, InputText } from "@modules/core/components";

import styles from "./SearchBox.module.css";

const SearchBox = ({ setClick }: SearchBoxProps): JSX.Element => {
  const [clientId, setClientId] = useState<string>("");

  const { validateClient } = useLoanRequestStore();
  const { loading, toggleLoading } = useLoading();

  return (
    <>
      <p className={styles.description + " " + "paragraph"}>
        Para realizar su solicitud de préstamo primero debe consultar si se
        encuentra registrado en nuestro sistema como cliente.
      </p>
      <div className={styles.searchBox}>
        <InputText
          id="clientId"
          type="text"
          name="clientId"
          label="Número de identificación"
          placeholder="Digite su número de identificación"
          value={clientId}
          errorMessage={""}
          Icon={Hashtag}
          onChange={(e) => setClientId(e.target.value)}
        />
        <IconOnlyButton
          Icon={Search}
          id="button-search"
          type="button"
          title="Consultar cliente"
          variant="primary"
          loading={loading}
          onClick={() => {
            validateClient(clientId, toggleLoading);
            setClick(true);
          }}
        />
      </div>
    </>
  );
};

export default SearchBox;
