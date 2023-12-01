import styled from "styled-components";
import { FormElement, TabsButton } from ".";
import { options } from "../constants";
import { useScript, useTimeLine } from "../hooks";
import { ElementFactory } from "../model";
import { ElementOptions } from "../model/ElementOptions";
import { useElementMutation } from "../hooks/useElementService";

const FormContainer = styled.div`
  padding: 5px 5px;
  background-color: #ececec;
  border: 2px solid #ccc;
  grid-column: 1 / 2; /* Ocupar la primera columna */
  grid-row: 1 / 2; /* Ocupar ambas filas */
  overflow-y: auto;
`;

export function Form() {
  const { tipoFormulario, handleChangeTab, addElement } = useScript();
  const { elements } = useTimeLine();
  const { mutate: createNewElement } = useElementMutation();

  const handleSave = (data: ElementOptions) => {
    const index = elements.length;

    console.log(`Desde form ${{ ...data, index }}`);
    // Crear element
    const newElement = ElementFactory.createElement({ ...data, index });

    // Query para agregar elemento
    createNewElement({ ...data, index });

    // const e = ElementFactory.createElement(response);

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
