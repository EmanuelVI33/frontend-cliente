import styled from "styled-components";

const PlayerContainer = styled.div`
  grid-column: 2 / 3; /* Ocupar la segunda columna */
  grid-row: 1 / 2; /* Ocupar la primera fila */
  background-color: black;
  color: white;
  padding: 16px;
`;

export function Player() {
  return (
    <PlayerContainer>
      <h2>Reproductor de música</h2>
    </PlayerContainer>
  );
}

export default Player;
