import { useContext } from "react";
import { ProgramContext } from "../context";

export const useProgramContext = () => {
  const context = useContext(ProgramContext);
  if (!context) {
    throw new Error("useProgramContext must be used within a ProgramProvider");
  }
  return context;
};
