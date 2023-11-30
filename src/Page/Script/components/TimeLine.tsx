import styled from "styled-components";
import { useTimeLine } from "../hooks";
import "@/Page/Script/style/index.css";

// const LineaTiempoContainer = styled.div`
//   grid-column: 1 / 3; /* Ocupar ambas columnas */
//   grid-row: 2 / 3; /* Ocupar la segunda fila */
//   display: flex;
//   justify-content: start;
//   overflow-x: auto;
// `;

const LineaTiempoButton = styled.button<{ selected: boolean }>`
  //   padding: 10px;
  height: 100%;
  margin: 0 5px;
  border: 1px solid #ccc;
  background-color: ${({ selected }) => (selected ? "#007bff" : "#fff")};
  color: ${({ selected }) => (selected ? "#fff" : "#000")};
  cursor: pointer;
`;

export function TimeLine() {
  const { elements, selectedElement, setSelectedElement } = useTimeLine();

  return (
    <div className="container-timeline">
      <div>
        <button onClick={() => console.log("Holaaaaaaa")}>
          Generar Contenido
        </button>
      </div>
      <div className="">
        {elements.map((element, index) => {
          return (
            <LineaTiempoButton
              key={index}
              selected={selectedElement === index}
              onClick={() =>
                setSelectedElement((prev) => (prev === index ? null : index))
              }
            >
              {element.type}
              {element.render()}
            </LineaTiempoButton>
          );
        })}
      </div>
    </div>
  );
}

export default TimeLine;
