import { useContext } from "react";
import { ProgrammingContext } from "../context";
import { useProgrammingQuery } from ".";
import { ProgramContext } from "@/Page/Program/context";

export const useProgramming = () => {
  const { selectProgramContext: selectProgram } = useContext(ProgramContext); // Obtener programa seleccionado

  const {
    data: programming = [],
    error,
    isLoading,
  } = useProgrammingQuery(selectProgram.id);

  return {
    programming,
  };
};
