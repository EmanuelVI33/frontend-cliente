import { useContext } from "react";
import { ProgrammingContext } from "../context";
import { useProgrammingMutation } from ".";

export const useProgrammingOtro = () => {
  const { programming, selectProgram, handleSetSelectedProgramming } =
    useContext(ProgrammingContext); // Obtener programa seleccionado

  const programmingMutation = useProgrammingMutation();

  return {
    programming,
    selectProgram,
    handleSetSelectedProgramming,
    programmingMutation,
  };
};
