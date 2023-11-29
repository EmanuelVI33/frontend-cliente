import styled from "styled-components";
import { ProgrammingModel } from "./model/ProgrammingModel";
import { Link } from "react-router-dom";
import ReactModal from "react-modal";
import { ProgrammingProvider } from "./context/ProgrammingContext";
import { useProgramming } from "./hooks/useProgramming";

const Container = styled.div`
  margin: 0 auto;
  padding: 20px;
`;

const ProgrammingList = styled.ul`
  list-style: none;
  padding: 0;
`;

const ProgrammingButton = styled(Link)`
  text-decoration: none;
  color: inherit;
`;

const ProgrammingItem = styled.li`
  border: 1px solid #ccc;
  border-radius: 8px;
  padding: 16px;
  margin-bottom: 16px;
  width: 300px;
  display: flex;
  flex-direction: column;
  align-items: center;

  p {
    margin: 8px 0;
  }
`;

const ModalContainer = styled.div`
  max-width: 200px;
  margin: 0 auto;
`;

export default function ProgrammingPage() {
  const {
    programming,
    titleRef,
    turnRef,
    startTimeRef,
    selectedProgramming,
    handleProgrammingClick,
    handleCreateProgramming,
    handleClose,
    handleConfirmation,
  } = useProgramming();

  return (
    <Container>
      <h1>Programaciones</h1>
      <ProgrammingList>
        {programming ? (
          programming.map((p: ProgrammingModel) => (
            <ProgrammingButton
              key={p.id}
              to={`/programming/${p.id}`}
              onClick={() => handleProgrammingClick(p)}
            >
              <ProgrammingItem>
                <p>{p.title}</p>
                <p>{p.turn}</p>
              </ProgrammingItem>
            </ProgrammingButton>
          ))
        ) : (
          <p>No tienes programaciones</p>
        )}
      </ProgrammingList>

      <div>
        <h2>Crear Nueva Programacción</h2>

        <div>
          <input type="text" placeholder="Nombre del programa" ref={titleRef} />

          <input
            type="number"
            placeholder="Turno de la proframación"
            ref={turnRef}
          />

          <input type="date" placeholder="Hora de inicio" ref={startTimeRef} />

          <button onClick={handleCreateProgramming}>Crear Programa</button>
        </div>
      </div>

      <ReactModal
        isOpen={!!selectedProgramming}
        onRequestClose={handleClose}
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
        {selectedProgramming && (
          <ModalContainer>
            <p>{`¿Quieres abrir el programacción ${selectedProgramming.title}?`}</p>
            <div>
              <button onClick={handleConfirmation}>Sí</button>
              <button onClick={handleClose}>No</button>
            </div>
          </ModalContainer>
        )}
      </ReactModal>
    </Container>
  );
}
