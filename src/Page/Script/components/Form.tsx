import styled from "styled-components";
import { FormElement, TabsButton } from ".";
import { options } from "../constants";
import { useScript, useScriptContext } from "../hooks";
import { UseQueryResult } from "@tanstack/react-query";

const FormContainer = styled.div`
  padding: 5px 5px;
  background-color: #ececec;
  border: 2px solid #ccc;
  grid-column: 1 / 2; /* Ocupar la primera columna */
  grid-row: 1 / 2; /* Ocupar ambas filas */
  overflow-y: auto;
`;

export function Form({ query }: { query: UseQueryResult<any, Error> }) {
  const { formType } = useScriptContext();
  const fieldType = options.find((el) => el.type === formType)?.field || [];

  return (
    <FormContainer>
      <TabsButton
        etiquetas={options.map((el) => el.type)}
        indiceActivo={options.findIndex((el) => el.type === formType)}
      />
      <FormElement type={formType} fields={fieldType} query={query} />
    </FormContainer>
  );
}

export default Form;
