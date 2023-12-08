import styled from "styled-components";
import { FormElement } from ".";
import { options } from "../constants";
import { useScriptContext } from "../hooks";
import { Tabs } from "antd";
import { QueryResult } from "@/interfaces";

const FormContainer = styled.div`
  padding: 5px 5px;
  background-color: #ececec;
  border: 2px solid #ccc;
  grid-column: 1 / 2; /* Ocupar la primera columna */
  grid-row: 1 / 2; /* Ocupar ambas filas */
  overflow-y: auto;
`;

export function Form({ query }: { query: QueryResult }) {
  const { formType, handleChangeTab } = useScriptContext();

  return (
    <FormContainer>
      <Tabs
        onChange={(e: string) => handleChangeTab(+e - 1)}
        tabPosition="left"
        type="card"
        items={options.map((option, index) => {
          const id = String(index + 1);
          return {
            label: `${option.type}`,
            key: id,
            children: (
              <FormElement
                type={options[formType].type}
                fields={options[formType].field}
                query={query}
              />
            ),
          };
        })}
      />
    </FormContainer>
  );
}

export default Form;
