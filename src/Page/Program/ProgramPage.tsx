import { useRef, useState } from "react";
import styled from "styled-components";
import ReactModal from "react-modal";
import { ProgramModel } from "./model";
import { useProgram } from "./hooks";
import { ProgramCard } from "./components";
import { useNavigate } from "react-router-dom";

// Estilos de los componentes
const Container = styled.div`
  margin: 0 auto;
  padding: 20px;
`;

const CardContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  gap: 16px;
`;

const ModalContainer = styled.div`
  max-width: 200px;
  margin: 0 auto;
`;

export default function ProgramPage() {
  const [selectedProgram, setSelectedProgram] = useState<ProgramModel | null>(
    null
  );
  // const [isConfirmationModalOpen, setConfirmationModalOpen] = useState(false);
  const nameRef = useRef<HTMLInputElement>(null);
  const durationRef = useRef<HTMLInputElement>(null);
  const navigate = useNavigate();
  const { programMutation, programs, setSelectProgramContext } = useProgram();

  const handleCreateProgram = () => {
    const name = nameRef.current?.value;
    const duration = Number(durationRef.current?.value);

    if (!name || !duration) return;

    programMutation.mutate({
      name,
      duration,
    });

    // Limpiar el formulario después de crear un programa
    if (nameRef.current) nameRef.current.value = "";
    if (durationRef.current) durationRef.current.value = "";
  };

  const handleConfirmation = () => {
    if (!selectedProgram) return;

    // setConfirmationModalOpen(false);
    const { id } = selectedProgram;
    setSelectProgramContext(selectedProgram); // Almacenar el programa seleccionado
    setSelectedProgram(null);
    navigate(`/program/${id}`);
  };

  const closeConfirmationModal = () => {
    // setConfirmationModalOpen(false);
    setSelectedProgram(null);
  };

  const handleProgramClick = (program: ProgramModel) => {
    setSelectedProgram(program);
  };

  const closeModal = () => {
    setSelectedProgram(null);
  };

  return (
    <Container>
      <h1>Programas</h1>

      {/* Lista de botones (ProgramCards) */}
      <CardContainer>
        {programs &&
          programs.map((program: ProgramModel) => (
            <ProgramCard
              key={program.id}
              program={program}
              onClick={() => handleProgramClick(program)}
            />
          ))}
      </CardContainer>

      {/* Formulario para crear un nuevo programa */}
      <div>
        <h2>Crear Nuevo Programa</h2>

        <div>
          <input type="text" placeholder="Nombre del programa" ref={nameRef} />

          <input
            type="number"
            placeholder="Duración (minutos)"
            ref={durationRef}
          />

          <button onClick={handleCreateProgram}>Crear Programa</button>
        </div>
      </div>

      <ReactModal
        isOpen={!!selectedProgram}
        onRequestClose={closeModal}
        contentLabel="Detalles del Programa"
        style={{
          content: {
            width: "60%",
            height: "200px",
            maxWidth: "300px",
            margin: "auto",
          },
        }}
      >
        {selectedProgram && (
          <ModalContainer>
            <p>{`¿Quieres abrir el programa ${selectedProgram.name}?`}</p>
            <div>
              <button onClick={handleConfirmation}>Sí</button>
              <button onClick={closeConfirmationModal}>No</button>
            </div>
          </ModalContainer>
        )}
      </ReactModal>
    </Container>
  );
}
