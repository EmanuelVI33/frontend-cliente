import styled from "styled-components";
import { FC } from "react";
import { useScript, useScriptContext } from "../hooks";
import { ElementEnum } from "../model";
import { Tabs } from "antd";

const TabsContainer = styled.div`
  display: flex;
  margin-bottom: 16px;
`;

const TabButton = styled.button<{ $isActive: boolean }>`
  padding: 8px 16px;
  margin-right: 16px;
  font-size: 16px;
  cursor: pointer;
  background-color: ${(props) => (props.$isActive ? "#007bff" : "transparent")};
  color: ${(props) => (props.$isActive ? "#fff" : "#000")};
  border: none;
  outline: none;
`;

interface TabsButtonProps {
  etiquetas: ElementEnum[];
  indiceActivo: number;
}

export const TabsButton: FC<TabsButtonProps> = ({
  etiquetas,
  indiceActivo,
}) => {
  const { handleChangeTab } = useScriptContext();

  return (
    <Tabs
      onChange={handleChangeTab}
      type="card"
      items={etiquetas.map((etiqueta) => {
        const id = String(i + 1);
        return {
          label: `${etiqueta}`,
          key: id,
          children: `Content of Tab Pane ${id}`,
        };
      })}
    />
  );
  // <TabsContainer>
  //   {etiquetas.map((etiqueta, index) => (
  //     <TabButton
  //       key={index}
  //       onClick={() => handleChangeTab(etiqueta)}
  //       style={{ fontWeight: indiceActivo === index ? "bold" : "normal" }}
  //       $isActive={indiceActivo === index}
  //     >
  //       {etiqueta}
  //     </TabButton>
  //   ))}
  // </TabsContainer>
  // );
};

export default TabsButton;
