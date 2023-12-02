import { useScriptContext } from ".";
import { useProgrammingContext } from "@/Page/Programming/hooks/useProgrammingContext";
import { useElementQuery } from "./useElementService";
import { ElementEnum, ElementFactory, ElementModel } from "../model";
import { useState } from "react";

// interface ScripProps {
//   addElement: (element: ElementModel) => void;
//   elemets: any;
// }

export const useScript = () => {
  const [tipoFormulario, setTipoFormulario] = useState<ElementEnum>(
    ElementEnum.imagen
  );
  const { addElement } = useScriptContext();

  // Obtener programming seleccionado
  const { programming } = useProgrammingContext();
  console.log(programming);

  const { data, isError, isLoading } = useElementQuery(programming.id);

  const handleChangeTab = (nuevoTipo: ElementEnum) => {
    console.log(nuevoTipo);
    setTipoFormulario(nuevoTipo);
  };

  return {
    programming,
    handleChangeTab,
    tipoFormulario,
    addElement,
    data,
    isError,
    isLoading,
  };
};
