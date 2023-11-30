import { useContext } from "react";
import { ScriptContext } from "../context";

export const useScriptContext = () => {
  const context = useContext(ScriptContext);
  if (!context) {
    throw new Error("useElements debe usarse dentro de un ElementsProvider");
  }
  return context;
};
