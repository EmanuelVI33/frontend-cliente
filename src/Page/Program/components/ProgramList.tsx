import styled from "styled-components";
import { ProgramCard } from ".";
import { useProgram } from "../hooks";
import { ProgramModel } from "../model";

const CardContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  gap: 16px;
`;

export function ProgramList() {
  const { programs, handleProgramClick } = useProgram();

  return (
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
  );
}

export default ProgramList;
