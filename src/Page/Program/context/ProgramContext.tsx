import React, { createContext, useEffect, useState } from "react";
import { ProgramModel } from "../model";

interface ProgramContextProps {
  program: ProgramModel | null;
  setProgram: (id: ProgramModel | null) => void;
  selectedProgram: ProgramModel | null;
  setSelectedProgram: (id: ProgramModel | null) => void;
}

const ProgramContext = createContext<ProgramContextProps | undefined>(
  undefined
);

const LOCAL_STORAGE_KEY = "selectedProgram";

const ProgramProvider = ({ children }: { children: React.ReactNode }) => {
  const [selectedProgram, setSelectedProgram] = useState<ProgramModel | null>(
    null
  );
  const [program, setProgram] = useState<null | ProgramModel>(() => {
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
        selectedProgram,
        setSelectedProgram,
      }}
    >
      {children}
    </ProgramContext.Provider>
  );
};

export { ProgramProvider };

export default ProgramContext;
