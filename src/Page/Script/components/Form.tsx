import styled from "styled-components";
import { FormElement, TabsButton } from ".";
import { options } from "../constants";
import { useScript } from "../hooks";

const FormContainer = styled.div`
  padding: 5px 5px;
  background-color: #ececec;
  border: 2px solid #ccc;
  grid-column: 1 / 2; /* Ocupar la primera columna */
  grid-row: 1 / 2; /* Ocupar ambas filas */
  overflow-y: auto;
`;

export function Form() {

  const { formType } = useScript();

  const fieldType = options.find((el) => el.type === formType)?.field || [];

  return (
    <FormContainer>
      <TabsButton
        etiquetas={options.map((el) => el.type)}
        indiceActivo={options.findIndex((el) => el.type === formType)}
      />
      <FormElement type={formType} fields={fieldType} />
    </FormContainer>
  );
}

export default Form;
