import styled from "styled-components";
import { Form, Player, TimeLine } from "./components";
import { useParams } from "react-router-dom";
import { useScript } from "./hooks";

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
  const { id } = useParams();
  const { query } = useScript({ id });

  return (
    <PaginaContainer>
      <Form query={query} />

      <Player query={query} />

      <TimeLine query={query} />
    </PaginaContainer>
  );
}
