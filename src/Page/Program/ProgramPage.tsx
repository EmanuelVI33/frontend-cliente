import styled from "styled-components";
import ReactModal from "react-modal";
import { ProgramModel } from "./model";
import { useProgram } from "./hooks";
import { ProgramCard } from "./components";

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
  const {
    selectedProgram,
    handleCreateProgram,
    handleProgramClick,
    handleConfirmation,
    closeModal,
    nameRef,
    durationRef,
    programs,
  } = useProgram();

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
              <button onClick={closeModal}>No</button>
            </div>
          </ModalContainer>
        )}
      </ReactModal>
    </Container>
  );
}
