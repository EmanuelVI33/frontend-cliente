import { useState } from "react";
import { useElementsContext } from ".";

export const useScript = () => {
  const { elements, addElement } = useElementsContext();
  const [tipoFormulario, setTipoFormulario] = useState("music"); // Tipo de formulario actual

  const handleChangeTab = (nuevoTipo: string) => {
    console.log(nuevoTipo);
    setTipoFormulario(nuevoTipo);
  };

  return {
    tipoFormulario,
    handleChangeTab,
    elements,
    addElement,
  };
};
