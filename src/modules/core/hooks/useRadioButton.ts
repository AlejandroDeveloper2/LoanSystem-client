/* eslint-disable react-hooks/exhaustive-deps */
import { ChangeEvent, useState, useEffect } from "react";

const useRadioButton = <T>(
  radioButtonValues: T,
  defaultValue: string,
  key: string,
  updateFormData: (fieldValue: string | number, key: string) => void
) => {
  const [radioButtonData, setRadioButtonData] = useState({
    ...radioButtonValues,
    selectedValue: defaultValue,
  });

  useEffect(() => {
    updateFormData(radioButtonData.selectedValue, key);
  }, [radioButtonData.selectedValue]);

  const handleRadioChange = (e: ChangeEvent<HTMLInputElement>): void => {
    setRadioButtonData({ ...radioButtonData, selectedValue: e.target.value });
  };

  return { radioButtonData, handleRadioChange };
};

export default useRadioButton;
