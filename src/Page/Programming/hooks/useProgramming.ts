import { useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useProgrammingMutation, useProgrammingQuery } from ".";
import { ProgrammingModel } from "../model/ProgrammingModel";
import { useProgramContext } from "@/Page/Program/hooks";
import { useProgrammingContext } from "./useProgrammingContext";

export const useProgramming = () => {
  const [selectedProgramming, setSelectedProgramming] =
    useState<ProgrammingModel | null>(null);

  const { program } = useProgramContext(); // Obtener programa seleccionado
  const { mutate: createProgramming } = useProgrammingMutation();
  const { data: programming } = useProgrammingQuery(program.id);
  const { setProgramming } = useProgrammingContext();

  const titleRef = useRef<HTMLInputElement>(null);
  const turnRef = useRef<HTMLInputElement>(null);
  const startTimeRef = useRef<HTMLInputElement>(null);
  const navigate = useNavigate();

  const handleProgrammingClick = (programming: ProgrammingModel) => {
    console.log(programming.elements[0]);
    setSelectedProgramming(programming);
  };

  const handleConfirmation = () => {
    if (!selectedProgramming) return;

    const id = selectedProgramming?.id;
    console.log(`Programming seleccionado ${selectedProgramming.title}`);

    setProgramming(selectedProgramming); // Almacenar en el context la programación
    setSelectedProgramming(null); // Vaciar
    navigate(`/programming/${id}`);
  };

  const handleClose = () => {
    setSelectedProgramming(null);
  };

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
      programId: program.id,
    });

    // Limpiar el formulario después de crear un programa
    titleRef.current.value = "";
  };

  return {
    programming,
    titleRef,
    turnRef,
    startTimeRef,
    selectedProgramming,
    handleProgrammingClick,
    handleClose,
    handleConfirmation,
    handleCreateProgramming,
  };
};
