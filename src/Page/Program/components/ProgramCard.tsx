import styled from "styled-components";

const CardButton = styled.button`
  background-color: #fff;
  padding: 16px;
  border: 1px solid #ddd;
  border-radius: 8px;
  width: 100%;
  text-align: left;
  cursor: pointer;
`;

export function ProgramCard({ program, onClick }) {
  return (
    <CardButton onClick={onClick}>
      <h2>{program.name}</h2>
      <p>{`Duración: ${program.duration} minutos`}</p>
    </CardButton>
  );
}
