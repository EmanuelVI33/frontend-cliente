import styled from "styled-components";
import { Form, Player, TimeLine } from "./components";

const PaginaContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr; /* Dividir en dos columnas */
  grid-template-rows: 1fr 1fr; /* Dividir en dos filas */
  gap: 5px;
  margin: 0 auto;
  max-width: 100%;
  height: 100vh;
`;

export default function ScriptPage() {
  return (
    <PaginaContainer>
      <Form />

      <Player />

      <TimeLine />
    </PaginaContainer>
  );
}
