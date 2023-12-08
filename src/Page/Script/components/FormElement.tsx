import { FC } from "react";
import styled from "styled-components";
import { useFormElement } from "../hooks/useFormElement";
import { FormField } from "../constants";
import { Button, Form, Input } from "antd";
import { QueryResult } from "@/interfaces";

interface FormElementProps {
  type: string;
  fields: FormField[];
  query: QueryResult;
}

const Campo = styled.div`
  margin-bottom: 0.5rem;
`;

// El type de formulario iamgen, video, ...
// fields el objeto para agregar  los datos y proporcionar query para saber el index
const FormElement: FC<FormElementProps> = ({ type, fields, query }) => {
  const { handleChange, handleFileChange, handleSave } = useFormElement({
    type,
    query,
  });

  return (
    <Form layout="vertical" encType="multipart/form-data" onFinish={handleSave}>
      <h2>{type}</h2>
      {fields.map((field) => (
        <Form.Item label={field.label}>
          {field.type === "file" ? (
            <Input
              type="file"
              accept={field.accept}
              onChange={(e) => handleFileChange(field.name, e)}
            />
          ) : (
            <Input
              id="outlined-basic"
              size="large"
              type={field.type}
              onChange={(e) => handleChange(field.name, e.target.value)}
            />
          )}
        </Form.Item>
      ))}
      <Form.Item>
        <Button type="primary" htmlType="submit">
          Agregar
        </Button>
      </Form.Item>
    </Form>
  );
};

export default FormElement;
