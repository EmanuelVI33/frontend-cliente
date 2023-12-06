import { useElementMutation } from "../hooks/useElementService";
import { ElementOptions } from "../model/ElementOptions";
import { ChangeEvent, useState } from "react";
import { useParams } from "react-router-dom";
import { UseQueryResult } from "@tanstack/react-query";

export const useFormElement = ({
  type,
  query,
}: {
  type: string;
  query: UseQueryResult<any, Error>;
}) => {
  const [formData, setFormData] = useState<ElementOptions>({});
  const { mutate: createNewElement } = useElementMutation();
  const { data } = query;
  const { id: script } = useParams();

  const handleChange = (fieldName: string, value: any) => {
    setFormData((prevData) => ({ ...prevData, [fieldName]: value }));
    console.log(formData);
  };

  const handleFileChange = (
    fieldName: string,
    e: ChangeEvent<HTMLInputElement>
  ) => {
    const file = e.target.files?.[0];

    if (file) {
      setFormData((prevData) => ({ ...prevData, [fieldName]: file }));
    }
  };

  const handleSave = (e: any) => {
    e.preventDefault();

    const form = new FormData();

    Object.entries(formData).forEach(([key, value]) => {
      if (value instanceof File) {
        // Si es un archivo, agrégalo directamente al FormData
        form.append(key, value);
      } else {
        // Si es un campo de texto, conviértelo a cadena y agrégalo al FormData
        form.append(key, String(value));
      }
    });

    // Agregar type
    form.append("type", type);

    form.append("index", String(data.length));
    form.append("programmingId", String(script));

    // Enviar el form
    createNewElement(form);
  };

  return {
    formData,
    setFormData,
    createNewElement,
    // programming,
    data,
    handleChange,
    handleFileChange,
    handleSave,
  };
};
