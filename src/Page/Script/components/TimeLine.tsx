import { useScriptContext } from "../hooks";
import { ElementFactory, ElementModel } from "../model";
import { useElementTriggerMutation } from "../hooks/useElementService";
import { useParams } from "react-router-dom";
import { Button, Card, List } from "antd";
import { QueryResult } from "@/interfaces";
import "@/Page/Script/style/index.css";

export function TimeLine({ query }: { query: QueryResult }) {
  const { data = [], isLoading, isError } = query;
  const { selectedElement, handleSelectElement } = useScriptContext();
  const { mutate: triggerElement } = useElementTriggerMutation();
  const { id } = useParams();

  console.log(`Id de programación ${id}`);

  if (isError) {
    return <p>Ocurrió un error</p>;
  }

  if (isLoading) return <p>Cargando...</p>;

  // console.log("dta-------", data);

  // Recorrer para crear la instancia correspondiente
  const elements = data.map(ElementFactory.createElement);

  const handleTrigger = () => {
    if (!id) return;

    const elementsIndex = elements.reduce(
      (acc: number[], element: ElementModel, index: number) => {
        if (!element.path || element.isChanged === true) {
          acc.push(index);
        }
        return acc;
      },
      []
    );

    console.log(elementsIndex);

    // Enviar a generar elementos
    triggerElement({ elementsIndex, programmingId: +id });
  };

  return (
    <div className="">
      <Button type="primary" onClick={handleTrigger}>
        Generar Contenido
      </Button>

      <List
        grid={{ gutter: 20, column: 5 }}
        dataSource={elements}
        renderItem={(item: ElementModel) => {
          const selected =
            selectedElement?.index === item?.index ? "selectedElement" : "";

          return (
            <List.Item>
              <Card
                className={selected}
                // title={item.type}
                onClick={() =>
                  handleSelectElement(
                    selectedElement?.index === item.index ? null : item
                  )
                }
                bordered={true}
                hoverable
              >
                {item.render()}
              </Card>
            </List.Item>
          );
        }}
      />
    </div>
  );
}

export default TimeLine;
