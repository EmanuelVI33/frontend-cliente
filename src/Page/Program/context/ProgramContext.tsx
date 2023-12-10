import React, { createContext, useEffect, useState } from "react";
import { ProgramModel } from "../model";

interface ProgramContextProps {
  selectedProgram: ProgramModel | null;
  setSelectedProgram: (id: ProgramModel | null) => void;
  getStorageProgram: () => ProgramModel | null;
}

const ProgramContext = createContext<ProgramContextProps | undefined>(
  undefined
);

const LOCAL_STORAGE_KEY = "selectedProgram";

const ProgramProvider = ({ children }: { children: React.ReactNode }) => {
  const [selectedProgram, setSelectedProgram] = useState<null | ProgramModel>(
    null
  );

  useEffect(() => {
    if (selectedProgram) {
      localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(selectedProgram));
    }
  }, [selectedProgram]);

  function getStorageProgram() {
    const storedProgram = localStorage.getItem(LOCAL_STORAGE_KEY);
    return storedProgram ? JSON.parse(storedProgram) : null;
  }
  return (
    <ProgramContext.Provider
      value={{
        selectedProgram,
        setSelectedProgram,
        getStorageProgram,
      }}
    >
      {children}
    </ProgramContext.Provider>
  );
};

export { ProgramProvider };

export default ProgramContext;
