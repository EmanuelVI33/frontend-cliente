import styled from "styled-components";
import { useTimeLine } from "../hooks";
import "@/Page/Script/style/index.css";
import { ElementModel } from "../model";

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
  const { elements, selectedElement, setSelectedElement } = useTimeLine();
  // const {} = useProgrammin

  const handleSelectElement = (element: ElementModel) => {
    const newElement =
      selectedElement?.index === element.index ? null : element;
    setSelectedElement(newElement);
    console.log(newElement);
  };

  return (
    <div className="container-timeline">
      <button onClick={() => console.log("Holaaaaaaa")}>
        Generar Contenido
      </button>
      <div className="timeline">
        {elements.map((element, index) => {
          return (
            <LineaTiempoButton
              key={index}
              selected={selectedElement?.index === index}
              onClick={() => handleSelectElement(element)}
            >
              {element.render()}
            </LineaTiempoButton>
          );
        })}
      </div>
    </div>
  );
}

export default TimeLine;
