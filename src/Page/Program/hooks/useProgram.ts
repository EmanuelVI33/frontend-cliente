import { useContext } from "react";
import { ProgramContext } from "../context";
import { useProgramMutation } from ".";

export const useProgram = () => {
  const programMutation = useProgramMutation();
  const programs = useContext(ProgramContext);

  return { programMutation, programs };
};
