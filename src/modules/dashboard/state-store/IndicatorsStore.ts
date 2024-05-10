import { create } from "zustand";
import { toast } from "react-toastify";

import { IndicatorsService } from "@modules/dashboard/services/Indicators.service";

import { initialGeneralIndicators } from "../constants/storeData";

import { IndicatorsStore } from "@modules/dashboard/interfaces/store-interfaces";
import { ResponseGlobal } from "@modules/core/interfaces/data-interfaces";
import {
  GeneralIndicators,
  OperationalExpensesFormData,
} from "@modules/dashboard/interfaces/data-interfaces";

const indicatorsService = new IndicatorsService();

const useIndicatorsStore = create<IndicatorsStore>((set) => ({
  generalIndicators: initialGeneralIndicators,
  operationalExpenses: 0,
  getGeneralIndicators: async (
    toggleLoading: (message: string, isLoading: boolean) => void
  ): Promise<void> => {
    const token: string = window.localStorage.getItem("token") ?? "";
    try {
      toggleLoading("Cargando indicador...", true);
      const { body: generalIndicators }: ResponseGlobal<GeneralIndicators> =
        await indicatorsService.getGeneralIndicators(token);
      set({ generalIndicators });
    } catch (e: unknown) {
      toast.error(
        "¡Ha ocurrido un error al obtener los indicadores generales!"
      );
    } finally {
      toggleLoading("", false);
    }
  },

  getOperationalExpenses: async (
    formData: OperationalExpensesFormData,
    toggleLoading: (message: string, isLoading: boolean) => void
  ): Promise<void> => {
    const token: string = window.localStorage.getItem("token") ?? "";
    try {
      toggleLoading("Calculando gastos operativos...", true);
      const { body: operationalExpenses }: ResponseGlobal<number> =
        await indicatorsService.getOperationalExpenses(formData, token);
      set({ operationalExpenses });
      toast.success("¡Calculo realizado con exito!");
    } catch (e: unknown) {
      toast.error("¡Ha ocurrido un error al calcular los gastos operativos!");
    } finally {
      toggleLoading("", false);
    }
  },
}));

export default useIndicatorsStore;
