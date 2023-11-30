import { useState } from "react";
import { useScriptContext } from ".";
import { ElementEnum } from "../model/ElementEnum";

export const useScript = () => {
  const { elements, addElement } = useScriptContext();
  const [tipoFormulario, setTipoFormulario] = useState("music"); // Tipo de formulario actual

  const handleChangeTab = (nuevoTipo: ElementEnum) => {
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
