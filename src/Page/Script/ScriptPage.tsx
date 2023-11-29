import styled from "styled-components";
import FormElement from "./components/FormElement";
import { TabsButton } from "./components";
import { useScript } from "./hooks/useScript";
import { options } from "./constants";
import { useState } from "react";

const PaginaContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr; /* Dividir en dos columnas */
  grid-template-rows: 1fr 1fr; /* Dividir en dos filas */
  gap: 16px;
  margin: 0 auto;
  height: 100vh; /* Ajustar la altura al 100% del viewport */
`;

const FormContainer = styled.div`
  grid-column: 1 / 2; /* Ocupar la primera columna */
  grid-row: 1 / 3; /* Ocupar ambas filas */
`;

const ReproductorContainer = styled.div`
  grid-column: 2 / 3; /* Ocupar la segunda columna */
  grid-row: 1 / 2; /* Ocupar la primera fila */
  background-color: black;
  color: white;
  padding: 16px;
`;

const LineaTiempoContainer = styled.div`
  grid-column: 1 / 3; /* Ocupar ambas columnas */
  grid-row: 2 / 3; /* Ocupar la segunda fila */
  display: flex;
  justify-content: space-between;
`;

const LineaTiempoButton = styled.button<{ selected: boolean }>`
  padding: 8px;
  border: 1px solid #ccc;
  background-color: ${({ selected }) => (selected ? "#007bff" : "#fff")};
  color: ${({ selected }) => (selected ? "#fff" : "#000")};
  cursor: pointer;
`;

export default function ScriptPage() {
  const { tipoFormulario, handleChangeTab, elements } = useScript();
  const [selectedElement, setSelectedElement] = useState<number | null>(null);

  const fieldType =
    options.find((el) => el.type === tipoFormulario)?.field || [];

  const handleSave = (data) => {
    // Utiliza la fábrica de elementos para crear la instancia correspondiente
    const newElement = ElementFactory.create(type, data);
    // Agrega el nuevo elemento a la lista utilizando la función del contexto
    addElement(newElement);
  };

  return (
    <PaginaContainer>
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

      <ReproductorContainer>
        <h2>Reproductor de música</h2>
      </ReproductorContainer>

      <LineaTiempoContainer>
        {elements.map((element, index) => (
          <LineaTiempoButton
            key={index}
            selected={selectedElement === index}
            onClick={() =>
              setSelectedElement((prev) => (prev === index ? null : index))
            }
          >
            {element.type}
          </LineaTiempoButton>
        ))}
      </LineaTiempoContainer>
    </PaginaContainer>
  );
}
