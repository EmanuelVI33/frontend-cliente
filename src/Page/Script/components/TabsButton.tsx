import styled from "styled-components";
import { FC } from "react";
import { useScript } from "../hooks";
import { ElementEnum } from "../model";

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
  const { handleChangeTab } = useScript();

  return (
    <TabsContainer>
      {etiquetas.map((etiqueta, index) => (
        <TabButton
          key={index}
          onClick={() => handleChangeTab(etiqueta)}
          style={{ fontWeight: indiceActivo === index ? "bold" : "normal" }}
          $isActive={indiceActivo === index}
        >
          {etiqueta}
        </TabButton>
      ))}
    </TabsContainer>
  );
};

export default TabsButton;
