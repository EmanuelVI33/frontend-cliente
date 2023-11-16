import styled from "styled-components";
import { useProgramming } from "./hooks";
import { ProgrammingModel } from "./model/ProgrammingModel";
import { Link, useNavigate } from "react-router-dom";
import ReactModal from "react-modal";
import { useState } from "react";

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
  const { programming } = useProgramming();
  const [selectedProgramming, setSelectedProgramming] =
    useState<ProgrammingModel | null>(null);
  const navigate = useNavigate();

  const closeModal = () => {
    setSelectedProgramming(null);
  };

  const handleProgramClick = (program: ProgramModel) => {
    setSelectedProgramming(program);
  };

  const handleOpenProgramming = (id: number) => {
    navigate(`programming/${id}/guion`);
  };

  return (
    <Container>
      <h1>Programaciones</h1>
      <ProgrammingList>
        {programming ? (
          programming.map((p: ProgrammingModel) => (
            <ProgrammingButton
              key={p.id}
              to={`/programming/${p.id}`}
              onClick={() => handleProgramClick(p)}
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

      <ReactModal
        isOpen={!!selectedProgramming}
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
        {selectedProgramming && (
          <ModalContainer>
            <p>{`¿Quieres abrir el programa ${selectedProgramming.name}?`}</p>
            {/* <div>
              <button onClick={handleConfirmation}>Sí</button>
              <button onClick={closeConfirmationModal}>No</button>
            </div> */}
          </ModalContainer>
        )}
      </ReactModal>
    </Container>
  );
}
