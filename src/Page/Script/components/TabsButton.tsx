import styled from "styled-components";
import { FC } from "react";

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
  etiquetas: string[];
  indiceActivo: number;
  onChange: (etiqueta: string) => void;
}

export const TabsButton: FC<TabsButtonProps> = ({
  etiquetas,
  indiceActivo,
  onChange,
}) => {
  return (
    <TabsContainer>
      {etiquetas.map((etiqueta, index) => (
        <TabButton
          key={index}
          onClick={() => onChange(etiqueta)}
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
