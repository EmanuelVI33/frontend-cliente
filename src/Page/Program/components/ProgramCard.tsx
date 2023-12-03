import styled from "styled-components";
import { ProgramModel } from "../model";
import { MouseEventHandler } from "react";

const CardButton = styled.button`
  background-color: #fff;
  padding: 16px;
  border: 1px solid #ddd;
  border-radius: 8px;
  width: 100%;
  text-align: left;
  cursor: pointer;
`;

interface PropsProgramCard {
  program: ProgramModel;
  onClick: MouseEventHandler<HTMLButtonElement>;
}

export function ProgramCard({ program, onClick }: PropsProgramCard) {
  return (
    <CardButton onClick={onClick}>
      <h2>{program.name}</h2>
      <p>{`Duración: ${program.duration} minutos`}</p>
    </CardButton>
  );
}
