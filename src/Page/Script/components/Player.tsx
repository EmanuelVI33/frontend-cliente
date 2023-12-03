import styled from "styled-components";
import { useScript } from "../hooks";

const PlayerContainer = styled.div`
  grid-column: 2 / 3;
  grid-row: 1 / 2;
  background-color: black;
  color: white;
  padding: 16px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const MediaContainer = styled.div`
  margin-top: 16px;
`;

const Player = () => {
  const { selectedElement } = useScript();

  return (
    <PlayerContainer>
      <h2>Reproductor</h2>
      <MediaContainer>
        {selectedElement ? (
          <div>
            <p>{`Reproduciendo: ${selectedElement.type}`}</p>
            {selectedElement.play()}
          </div>
        ) : null}
        {/* <button onClick={handlePlay}>Reproducir</button> */}
      </MediaContainer>
    </PlayerContainer>
  );
};

export default Player;
