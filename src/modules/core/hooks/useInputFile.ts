/* eslint-disable react-hooks/exhaustive-deps */
import { ChangeEvent, useState, useEffect } from "react";

const useInputFile = () =>
  // inputKey: string,
  // updateFormData: (fieldValue: string | number | Blob, key: string) => void
  {
    const [file, setFile] = useState<Blob | string>("");
    const [loadingDoc, setLoadingDoc] = useState<boolean>(false);

    const uploadFile = (e: ChangeEvent<HTMLInputElement>): void => {
      setLoadingDoc(true);
      setFile(e.target.files![0]);
    };

    // useEffect(() => {
    //   updateFormData(file, inputKey);
    // }, [file]);

    const clearFile = (): void => {
      setFile("");
    };

    useEffect(() => {
      if (file !== "") setLoadingDoc(false);
    }, [file]);

    return {
      file,
      loadingDoc,
      uploadFile,
      clearFile,
    };
  };

export default useInputFile;
