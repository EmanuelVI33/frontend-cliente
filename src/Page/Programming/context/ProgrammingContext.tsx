import { createContext, useEffect, useState } from "react";

interface ProgrammingContextProps {
  programmingId: string | undefined;
  setProgrammingId: (id: string | undefined) => void;
}

const ProgrammingContext = createContext<ProgrammingContextProps | undefined>(
  undefined
);

const LOCAL_STORAGE_KEY = "selectedProgramming";

const ProgrammingProvider = ({ children }: { children: React.ReactNode }) => {
  const [programmingId, setProgrammingId] = useState<string | undefined>(() => {
    const storedProgramming = localStorage.getItem(LOCAL_STORAGE_KEY);
    return storedProgramming ? JSON.parse(storedProgramming) : null;
  });

  useEffect(() => {
    if (programmingId) {
      localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(programmingId));
    }
  }, [programmingId]);

  return (
    <ProgrammingContext.Provider
      value={{
        programmingId,
        setProgrammingId,
      }}
    >
      {children}
    </ProgrammingContext.Provider>
  );
};

export { ProgrammingProvider };

export default ProgrammingContext;
