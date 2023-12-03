import { FC } from "react";
import styled from "styled-components";
import { Button, TextField } from "@mui/material";
import { useFormElement } from "../hooks/useFormElement";

interface FormField {
  name: string;
  type: "text" | "number" | "date" | "file"; // Puedes agregar más tipos según sea necesario
  label: string;
  accept: string;
}

// Define el tipo para el componente FormElementProps
interface FormElementProps {
  type: string;
  fields: FormField[];
}

const Campo = styled.div`
  margin-bottom: 0.5rem;
`;

const FormElement: FC<FormElementProps> = ({ type, fields }) => {
  const { handleChange, handleFileChange, handleSave } = useFormElement();

  return (
    <form encType="multipart/form-data">
      <h2>{type}</h2>
      {fields.map((field) => (
        <Campo key={field.name}>
          {field.type === "file" ? (
            <input
              type="file"
              accept={field.accept}
              onChange={(e) => handleFileChange(field.name, e)}
            />
          ) : (
            <TextField
              id="outlined-basic"
              label={field.label}
              variant="standard"
              type={field.type}
              onChange={(e) => handleChange(field.name, e.target.value)}
              fullWidth={true}
            />
          )}
        </Campo>
      ))}
      <Button variant="outlined" onClick={handleSave}>
        Agregar
      </Button>
    </form>
  );
};

export default FormElement;
