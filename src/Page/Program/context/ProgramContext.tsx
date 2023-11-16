import React, { createContext, useState } from "react";
import { ProgramModel } from "../model";
import { useProgramQuery } from "../hooks";

const ProgramContext = createContext({});

const ProgramProvider = ({ children }: { children: React.ReactNode }) => {
  const [selectProgramContext, setSelectProgramContext] =
    useState<null | ProgramModel>(null);
  const { data: programs, error, isLoading } = useProgramQuery();

  if (isLoading) {
    return <p>Cargando.....</p>;
  }

  if (error) {
    return <p>Error al cargar los programas</p>;
  }

  return (
    <ProgramContext.Provider
      value={{ programs, selectProgramContext, setSelectProgramContext }}
    >
      {children}
    </ProgramContext.Provider>
  );
};

export { ProgramProvider };

export default ProgramContext;
