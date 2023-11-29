import React, { createContext, useEffect, useState } from "react";
import { ProgramModel } from "../model";

const ProgramContext = createContext({});

const LOCAL_STORAGE_KEY = "selectedProgram";

const ProgramProvider = ({ children }: { children: React.ReactNode }) => {
  const [program, setProgram] = useState<null | ProgramModel>(() => {
    // Cargar el programa seleccionado desde el localStorage al inicio
    const storedProgram = localStorage.getItem(LOCAL_STORAGE_KEY);
    return storedProgram ? JSON.parse(storedProgram) : null;
  });

  useEffect(() => {
    if (program) {
      localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(program));
    }
  }, [program]);

  return (
    <ProgramContext.Provider
      value={{
        program,
        setProgram,
      }}
    >
      {children}
    </ProgramContext.Provider>
  );
};

export { ProgramProvider };

export default ProgramContext;
