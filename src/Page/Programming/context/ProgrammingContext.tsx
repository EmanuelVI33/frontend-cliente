import { createContext, useContext } from "react";
import { useProgrammingQuery } from "../hooks";
import { ProgramContext } from "@/Page/Program/context";

const ProgrammingContext = createContext({});

const ProgrammingProvider = ({ children }: { children: React.ReactNode }) => {
  const { selectProgramContext: selectProgram } = useContext(ProgramContext);

  console.log(selectProgram);

  const {
    data: programming = [],
    error,
    isLoading,
  } = useProgrammingQuery(selectProgram.id); // Obtener programa con programming

  console.log(programming);

  if (isLoading) {
    return <p>Cargando.....</p>;
  }

  if (error) {
    return <p>Error al cargar los programas</p>;
  }

  return (
    <ProgrammingContext.Provider value={{ programming }}>
      {children}
    </ProgrammingContext.Provider>
  );
};

export { ProgrammingProvider };

export default ProgrammingContext;
