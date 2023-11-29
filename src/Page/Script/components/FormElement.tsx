import { FC, useState } from "react";
import styled from "styled-components";
import { useElementsContext, useScript } from "../hooks";
import { Button, TextField } from "@mui/material";

interface FormField {
  name: string;
  type: "text" | "number" | "date" | "file"; // Puedes agregar más tipos según sea necesario
  label: string;
  accept: string;
}

// Define el tipo para un elemento
// interface ElementType {
//   type: string;
//   fields: FormField[];
// }

// Define el tipo para el componente FormElementProps
interface FormElementProps {
  type: string;
  fields: FormField[];
  onSave: (data: Record<string, any>) => void;
}

const FormContainer = styled.div`
  // max-width: 400px;
  margin: 0 auto;
  padding: 20px 30px;
  border: 1px solid #ccc;
  border-radius: 8px;
`;

const Campo = styled.div`
  margin-bottom: 0.5rem;
`;

const LabelInput = styled.label`
  display: block;
  margin-bottom: 1rem;
`;

const Input = styled.input`
  width: 100%;
  padding: 12px;
  box-sizing: border-box;
  border: 1px solid #ccc; /* Añadir un borde */
  border-radius: 4px; /* Añadir esquinas redondeadas */
`;

const SaveButton = styled.button`
  background-color: #007bff;
  color: #fff;
  padding: 12px 16px;
  cursor: pointer;
  z-index: 0; /* Establecer un z-index inferior */
`;

const FormElement: FC<FormElementProps> = ({ type, fields, onSave }) => {
  const { formData, setFormData } = useElementsContext();

  const handleChange = (fieldName: string, value: any) => {
    setFormData((prevData) => ({ ...prevData, [fieldName]: value }));
  };

  const handleSave = () => {
    onSave(formData); // Pasa directamente el objeto formData al método onSave
  };

  return (
    <FormContainer>
      <h2>{type}</h2>
      {fields.map((field) => (
        <Campo key={field.name}>
          <TextField
            id="outlined-basic"
            label={field.label}
            variant="standard"
            type={field.type}
            onChange={(e) => handleChange(field.name, e.target.value)}
            fullWidth={true}
          />
        </Campo>
      ))}
      <Button variant="outlined" onClick={handleSave}>
        Agregar
      </Button>
    </FormContainer>
  );
};

export default FormElement;

// import { useState } from "react";
// import styled from "styled-components";

// const FormContainer = styled.div`
//   max-width: 400px;
//   margin: 0 auto;
// `;

// const Campo = styled.div`
//   margin-bottom: 16px;
// `;

// const LabelInput = styled.label`
//   display: block;
//   margin-bottom: 8px;
// `;

// const Input = styled.input`
//   width: 100%;
//   padding: 8px;
// `;

// const Button = styled.button`
//   background-color: #007bff;
//   color: #fff;
//   padding: 8px 16px;
//   cursor: pointer;
// `;

// interface PropForm {
//   tipo: string;
//   onGuardar: any;
// }

// const FormElements = ({ tipo, onGuardar }: PropForm) => {
//   const [datosFormulario, setDatosFormulario] = useState({
//     path: "",
//     index: 0,
//     duration: 0,
//     name: "",
//     title: "",
//     content: "",
//     author: "",
//     programmingId: 1,
//   });

//   const handleGuardar = () => {
//     // Lógica para guardar los datos
//     onGuardar(datosFormulario);
//   };

//   const handleChange = (campo, valor) => {
//     setDatosFormulario((prevDatos) => ({
//       ...prevDatos,
//       [campo]: valor,
//     }));
//   };

//   return (
//     <FormContainer>
//       {tipo === "imagen" && (
//         <Campo>
//           <LabelInput>Duración:</LabelInput>
//           <Input
//             type="number"
//             value={datosFormulario.duration}
//             onChange={(e) => handleChange("duration", e.target.value)}
//           />
//         </Campo>
//       )}

//       {tipo === "music" && (
//         <>
//           <Campo>
//             <LabelInput>Nombre:</LabelInput>
//             <Input
//               type="text"
//               value={datosFormulario.name}
//               onChange={(e) => handleChange("name", e.target.value)}
//             />
//           </Campo>
//           <Campo>
//             <LabelInput>Autor:</LabelInput>
//             <Input
//               type="text"
//               value={datosFormulario.author}
//               onChange={(e) => handleChange("author", e.target.value)}
//             />
//           </Campo>
//         </>
//       )}

//       {tipo === "presenter" && (
//         <>
//           <Campo>
//             <LabelInput>Título:</LabelInput>
//             <Input
//               type="text"
//               value={datosFormulario.title}
//               onChange={(e) => handleChange("title", e.target.value)}
//             />
//           </Campo>
//           <Campo>
//             <LabelInput>Contenido:</LabelInput>
//             <Input
//               type="text"
//               value={datosFormulario.content}
//               onChange={(e) => handleChange("content", e.target.value)}
//             />
//           </Campo>
//         </>
//       )}

//       {tipo === "video" && (
//         <Campo>
//           <LabelInput>Título:</LabelInput>
//           <Input
//             type="text"
//             value={datosFormulario.title}
//             onChange={(e) => handleChange("title", e.target.value)}
//           />
//         </Campo>
//       )}

//       <Button onClick={handleGuardar}>Guardar</Button>
//     </FormContainer>
//   );
// };

// export default FormElements;
