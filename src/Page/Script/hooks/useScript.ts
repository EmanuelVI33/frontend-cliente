import { useScriptContext } from ".";
import { useProgrammingContext } from "@/Page/Programming/hooks/useProgrammingContext";
import { useElementQuery } from "./useElementService";
import { ElementEnum } from "../model";

export const useScript = () => {
  const {
    selectedElement,
    setSelectedElement,
    formType,
    setFormType,
    data,
    isLoading,
    isError,
  } = useScriptContext();

  // Obtener programming seleccionado
  // const { programming } = useProgrammingContext();

  // const { data, isError, isLoading } = useElementQuery(programming.id);

  const handleChangeTab = (newType: ElementEnum) => {
    setFormType(newType);
  };

  return {
    // programming,
    handleChangeTab,
    data,
    isError,
    isLoading,
    selectedElement,
    setSelectedElement,
    formType,
  };
};
