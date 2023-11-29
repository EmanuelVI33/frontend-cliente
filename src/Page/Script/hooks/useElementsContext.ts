import { useContext } from "react";
import { ElementsContext } from "../context/ElementsContext";

export const useElementsContext = () => {
  const context = useContext(ElementsContext);
  if (!context) {
    throw new Error("useElements debe usarse dentro de un ElementsProvider");
  }
  return context;
};
