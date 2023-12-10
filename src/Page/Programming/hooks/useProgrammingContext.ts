import { useContext } from "react";
import { ProgrammingContext } from "@/Page/Programming/context";

export const useProgrammingContext = () => {
  const context = useContext(ProgrammingContext);
  if (!context) {
    throw new Error("useProgramContext must be used within a ProgramProvider");
  }
  return context;
};
