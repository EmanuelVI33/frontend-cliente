import { useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useProgrammingMutation, useProgrammingQuery } from ".";
import { ProgrammingModel } from "../model/ProgrammingModel";
// import { useProgramContext } from "@/Page/Program/hooks";
import { useProgrammingContext } from "./useProgrammingContext";

interface PropsProgramming {
  id: string | undefined;
}

export const useProgramming = ({ id }: PropsProgramming) => {
  // const [selectedProgramming, setSelectedProgramming] =
  //   useState<ProgrammingModel | null>(null);

  // const { program } = useProgramContext(); // Obtener programa seleccionado
  const { mutate: createProgramming } = useProgrammingMutation();
  const { data: programming = [] } = useProgrammingQuery(id);
  console.log(`Lista de programming: ${programming}`);

  const titleRef = useRef<HTMLInputElement>(null);
  const turnRef = useRef<HTMLInputElement>(null);
  const startTimeRef = useRef<HTMLInputElement>(null);

  // const navigate = useNavigate();

  // const handleProgrammingClick = (programming: ProgrammingModel) => {
  //   // setSelectedProgramming(programming);
  //   setProgramming(programming);
  // };

  // const handleConfirmation = () => {
  //   if (!selectedProgramming) return;

  //   const id = selectedProgramming?.id;
  //   console.log(`Programming seleccionado ${selectedProgramming.title}`);

  //   setProgramming(selectedProgramming); // Almacenar en el context la programación
  //   // setSelectedProgramming(null); // Vaciar
  //   navigate(`/programming/${id}`);
  // };

  // const handleClose = () => {
  //   setSelectedProgramming(null);
  // };

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
    programming,
    titleRef,
    turnRef,
    startTimeRef,
    // selectedProgramming,
    // handleProgrammingClick,
    // handleClose,
    // handleConfirmation,
    handleCreateProgramming,
  };
};
