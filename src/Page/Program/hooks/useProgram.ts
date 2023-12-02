import { useState, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { ProgramModel } from "../model";
import { useProgramContext, useProgramQuery } from ".";
import { useProgramMutation } from "./useProgramQuery";

export const useProgram = () => {
  const [selectedProgram, setSelectedProgram] = useState<ProgramModel | null>(
    null
  );
  const nameRef = useRef<HTMLInputElement>(null);
  const durationRef = useRef<HTMLInputElement>(null);
  const navigate = useNavigate();
  const { mutate: createProgram } = useProgramMutation();
  const { data: programs, isLoading, isError } = useProgramQuery();
  const { setProgram } = useProgramContext();

  console.log(programs);

  const handleCreateProgram = () => {
    const name = nameRef.current?.value;
    const duration = Number(durationRef.current?.value);

    if (!name || !duration) return;

    createProgram({
      name,
      duration,
    });

    // Limpiar el formulario después de crear un programa
    if (nameRef.current) nameRef.current.value = "";
    if (durationRef.current) durationRef.current.value = "";
  };

  const handleProgramClick = (program: ProgramModel) => {
    console.log(program);
    setSelectedProgram(program);
  };

  const handleConfirmation = () => {
    if (!selectedProgram) return;

    console.log(`Programa seleccionado: ${selectedProgram.name}`);

    setProgram(selectedProgram); // Almacenar el programa seleccionado
    setSelectedProgram(null);
    navigate(`/program/${selectedProgram.id}`);
  };

  const closeModal = () => {
    setSelectedProgram(null);
  };

  return {
    handleCreateProgram,
    handleProgramClick,
    handleConfirmation,
    closeModal,
    selectedProgram,
    nameRef,
    durationRef,
    programs,
  };
};
