import { createContext, useEffect, useState } from "react";
import { ProgrammingModel } from "../model/ProgrammingModel";

// interface ProgrammingContextProps {
//   programming: ProgrammingModel | null;
//   setProgramming: (id: ProgrammingModel | null) => void;
//   // setSelectedElement: (id: ProgrammingModel | null) => void;
//   // elements: ElementModel[] | undefined;
// }

const ProgrammingContext = createContext({});

const LOCAL_STORAGE_KEY = "selectedProgramming";

const ProgrammingProvider = ({ children }: { children: React.ReactNode }) => {
  const [programming, setProgramming] = useState<ProgrammingModel | null>(
    () => {
      const storedProgramming = localStorage.getItem(LOCAL_STORAGE_KEY);
      return storedProgramming ? JSON.parse(storedProgramming) : null;
    }
  );

  // const [elements, setElements] = useState<ElementModel[]>(() => {
  //   return programming?.elements ? programming?.elements : [];
  // });

  // console.log(`Elementos de la programación: ${elements}`);

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
