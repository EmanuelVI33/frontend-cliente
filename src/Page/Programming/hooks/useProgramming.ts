import { useRef } from "react";
import { useProgrammingQuery } from ".";
import { QueryResult } from "@/interfaces";

interface PropsProgramming {
  id: string | undefined;
}

export const useProgramming = ({ id }: PropsProgramming) => {
  const query: QueryResult = useProgrammingQuery(id);
  const titleRef = useRef<HTMLInputElement>(null);
  const turnRef = useRef<HTMLInputElement>(null);
  const startTimeRef = useRef<HTMLInputElement>(null);

  const handleCreateProgramming = () => {
    const title = titleRef.current?.value;
    const turn = Number(turnRef.current?.value);
    const startTime = startTimeRef.current?.valueAsDate; // Acceder al valor de la fecha

    console.log(`Fecha ${startTime}`);

    if (!title || !turn || !startTime) return;

    const formattedStartTime = startTime.toISOString().split("T")[0];

    console.log("Pasoo");

    createProgramming({
      title,
      turn,
      startTime: formattedStartTime,
      programId: id,
    });

    // Limpiar el formulario después de crear un programa
    titleRef.current.value = "";
  };

  return {
    query,
    titleRef,
    turnRef,
    startTimeRef,
    handleCreateProgramming,
  };
};
