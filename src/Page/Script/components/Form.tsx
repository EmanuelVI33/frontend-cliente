import styled from "styled-components";
import { FormElement, TabsButton } from ".";
import { options } from "../constants";
import { useScript } from "../hooks";
import { ElementFactory } from "../model";

const FormContainer = styled.div`
  grid-column: 1 / 2; /* Ocupar la primera columna */
  grid-row: 1 / 2; /* Ocupar ambas filas */
`;

export function Form() {
  const { tipoFormulario, handleChangeTab, addElement } = useScript();
  const handleSave = (data) => {
    const newElement = ElementFactory.createElement(data);
    newElement.path = data.path;
    addElement(newElement);
  };

  const fieldType =
    options.find((el) => el.type === tipoFormulario)?.field || [];

  return (
    <FormContainer>
      <TabsButton
        etiquetas={options.map((el) => el.type)}
        indiceActivo={options.findIndex((el) => el.type === tipoFormulario)}
        onChange={handleChangeTab}
      />
      <FormElement
        type={tipoFormulario}
        fields={fieldType}
        onSave={handleSave}
      />
    </FormContainer>
  );
}

export default Form;
