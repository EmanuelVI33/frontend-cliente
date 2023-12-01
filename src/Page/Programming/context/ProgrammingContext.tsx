import { createContext, useEffect, useState } from "react";
import { ProgrammingModel } from "../model/ProgrammingModel";
import { ElementModel } from "@/Page/Script/model";

interface ProgrammingContextProps {
  programming: ProgrammingModel[] | null;
  setSelectedElement: (id: ProgrammingModel | null) => void;
  elements: ElementModel[] | undefined;
  setElements: (id: ElementModel[] | null) => void;
}

const ProgrammingContext = createContext<ProgrammingContextProps | undefined>(
  undefined
);

const LOCAL_STORAGE_KEY = "selectedProgramming";

const ProgrammingProvider = ({ children }: { children: React.ReactNode }) => {
  const [programming, setProgramming] = useState<null | ProgrammingModel>(
    () => {
      const storedProgramming = localStorage.getItem(LOCAL_STORAGE_KEY);
      return storedProgramming ? JSON.parse(storedProgramming) : null;
    }
  );

  const [elements, setElements] = useState<ElementModel[]>(() => {
    return programming?.elements ? programming?.elements : [];
  });

  console.log(`Elementos de la programación: ${elements}`);

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
        elements,
        setElements,
      }}
    >
      {children}
    </ProgrammingContext.Provider>
  );
};

export { ProgrammingProvider };

export default ProgrammingContext;
