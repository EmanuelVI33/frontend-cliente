import { useElementMutation } from "../hooks/useElementService";
import { ElementOptions } from "../model/ElementOptions";
import { ChangeEvent } from "react";
import { useParams } from "react-router-dom";
import { QueryResult } from "@/interfaces";
import { useScriptContext } from ".";

export const useFormElement = ({
  type,
  query,
}: {
  type: string;
  query: QueryResult;
}) => {
  const { formData, setFormData } = useScriptContext();
  const { mutate: createNewElement } = useElementMutation();
  const { data } = query;
  const { id: script } = useParams();

  const handleChange = (fieldName: string, value: any) => {
    setFormData((prevData: ElementOptions) => ({
      ...prevData,
      [fieldName]: value,
    }));
    console.log(formData);
  };

  const handleFileChange = (
    fieldName: string,
    e: ChangeEvent<HTMLInputElement>
  ) => {
    const file = e.target.files?.[0];

    if (file) {
      setFormData((prevData: ElementOptions) => ({
        ...prevData,
        [fieldName]: file,
      }));
    }
  };

  const handleSave = () => {
    // e.preventDefault();

    const form = new FormData();

    Object.entries(formData).forEach(([key, value]) => {
      if (value instanceof File) {
        // Si es un archivo, agrégalo directamente al FormData
        console.log("form -----", value);
        form.append("file", value as Blob);
      } else {
        // Si es un campo de texto, conviértelo a cadena y agrégalo al FormData
        form.append(key, String(value));
      }
    });

    // Agregar type
    form.append("type", type);
    form.append("index", String(data.length)); // Agregar index
    form.append("programmingId", String(script));

    console.log("form: ", JSON.stringify(form));
    // Enviar el form
    createNewElement(form);
  };

  return {
    formData,
    setFormData,
    createNewElement,
    data,
    handleChange,
    handleFileChange,
    handleSave,
  };
};
