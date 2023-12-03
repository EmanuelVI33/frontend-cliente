import { createContext, useEffect, useState } from "react";
import { ProgrammingModel } from "../model/ProgrammingModel";

interface ProgrammingContextProps {
  programming: ProgrammingModel | null;
  setProgramming: (id: ProgrammingModel | null) => void;
}

const ProgrammingContext = createContext<ProgrammingContextProps | undefined>(
  undefined
);

const LOCAL_STORAGE_KEY = "selectedProgramming";

const ProgrammingProvider = ({ children }: { children: React.ReactNode }) => {
  const [programming, setProgramming] = useState<ProgrammingModel | null>(
    () => {
      const storedProgramming = localStorage.getItem(LOCAL_STORAGE_KEY);
      return storedProgramming ? JSON.parse(storedProgramming) : null;
    }
  );

  useEffect(() => {
    if (programming) {
      localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(programming));
    }
  }, [programming]);

  return (
    <ProgrammingContext.Provider
      value={{
        programming,
        setProgramming,
      }}
    >
      {children}
    </ProgrammingContext.Provider>
  );
};

export { ProgrammingProvider };

export default ProgrammingContext;
