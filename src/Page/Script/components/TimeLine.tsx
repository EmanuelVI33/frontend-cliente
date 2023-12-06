import styled from "styled-components";

import { useScriptContext } from "../hooks";

import "@/Page/Script/style/index.css";
import { ElementFactory, ElementModel } from "../model";
import { UseQueryResult } from "@tanstack/react-query";
import { useElementTriggerMutation } from "../hooks/useElementService";
import { useParams } from "react-router-dom";

const LineaTiempoButton = styled.button<{ selected: boolean }>`
  padding: 10px;
  // height: 100%;
  margin: 0 5px;
  border: 1px solid #ccc;
  border-radius: 10%;
  background-color: ${({ selected }) => (selected ? "#007bff" : "#fff")};
  color: ${({ selected }) => (selected ? "#fff" : "#000")};
  cursor: pointer;
`;

export function TimeLine({ query }: { query: UseQueryResult<any, Error> }) {
  const { data, isLoading, isError } = query;
  const { selectedElement, handleSelectElement } = useScriptContext();
  const { mutate: triggerElement } = useElementTriggerMutation();
  const { id } = useParams();

  console.log(`Id de programación ${id}`);

  if (isLoading) return <p>Cargando....</p>;

  if (isError) return <p>Error...</p>;

  if (isLoading) {
    return <p>Cargando</p>;
  }

  if (isError) {
    return <p>Ocurrió un error</p>;
  }

  // Recorrer para crear la instancia correspondiente
  const elements = data.map(ElementFactory.createElement);

  const handleTrigger = () => {
    const elementsIndex = elements.reduce(
      (acc: number[], element: ElementModel, index: number) => {
        if (element.path === null || element.isChanged === true) {
          acc.push(index);
        }
        return acc;
      },
      []
    );

    console.log(elementsIndex);

    // Enviar a generar elementos
    triggerElement({ elementsIndex, programmingId: id });
  };

  return (
    <div className="container-timeline">
      <button onClick={handleTrigger}>Generar Contenido</button>
      <div className="timeline">
        {elements.map((element: ElementModel, index: number) => {
          return (
            <LineaTiempoButton
              key={index}
              selected={selectedElement?.index === element.index}
              onClick={() =>
                handleSelectElement(
                  selectedElement?.index === element.index ? null : element
                )
              }
            >
              {/* <p>{element.id}</p> */}
              {element.render()}
            </LineaTiempoButton>
          );
        })}
      </div>
    </div>
  );
}

export default TimeLine;
