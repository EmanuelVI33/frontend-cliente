import React, { createContext, useState } from "react";
import { ProgramModel } from "../model";
import { useProgramQuery } from "../hooks";

const ProgramContext = createContext({});

// interface ProgramContextProps {
//   children: ReactNode;
// }

const ProgramProvider = ({ children }: { children: React.ReactNode }) => {
  // const [selectProgram, setSelectProgram] = useState<null | ProgramModel>(null);

  const { data: programs, error, isLoading } = useProgramQuery();

  if (isLoading) {
    return <p>Cargando.....</p>;
  }

  if (error) {
    return <p>Error al cargar los programas</p>;
  }

  return (
    <ProgramContext.Provider value={programs}>
      {children}
    </ProgramContext.Provider>
  );
};

export { ProgramProvider };

export default ProgramContext;
