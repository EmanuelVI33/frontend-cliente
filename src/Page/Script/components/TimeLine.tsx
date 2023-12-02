import styled from "styled-components";
import { useScript, useTimeLine } from "../hooks";
import "@/Page/Script/style/index.css";
import { ElementFactory, ElementModel } from "../model";

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

export function TimeLine() {
  const { selectedElement, setSelectedElement } = useTimeLine();
  const { data, isLoading, isError } = useScript();

  const handleSelectElement = (element: ElementModel) => {
    const newElement =
      selectedElement?.index === element.index ? null : element;
    setSelectedElement(newElement);
    console.log(newElement);
  };

  if (isLoading) {
    return <p>Cargando</p>;
  }

  if (isError) {
    return <p>Ocurrió un error</p>;
  }

  // Recorrer para crear la instancia correspondiente
  const elements = data.map(ElementFactory.createElement);

  return (
    <div className="container-timeline">
      <button onClick={() => console.log("Holaaaaaaa")}>
        Generar Contenido
      </button>
      <div className="timeline">
        {elements.map((element: ElementModel, index: number) => {
          return (
            <LineaTiempoButton
              key={index}
              selected={selectedElement?.index === element.index}
              onClick={() => handleSelectElement(element)}
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
