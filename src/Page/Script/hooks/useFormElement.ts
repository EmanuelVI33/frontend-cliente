import { useElementMutation } from "../hooks/useElementService";
import { ElementOptions } from "../model/ElementOptions";
import { useScript } from "../hooks";
import { ChangeEvent, useState } from "react";
import { useProgrammingContext } from "@/Page/Programming/hooks/useProgrammingContext";

export const useFormElement = () => {
  const [formData, setFormData] = useState<ElementOptions>({});
  const { mutate: createNewElement } = useElementMutation();
  const { programming } = useProgrammingContext();
  const { data, formType: type } = useScript();

  const programmingId = programming.id;

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

    const index = data.length;

    form.append("index", String(index));
    form.append("programmingId", String(programmingId));

    // Enviar el form
    createNewElement(form);
  };

  return {
    formData,
    setFormData,
    createNewElement,
    programming,
    data,
    handleChange,
    handleFileChange,
    handleSave,
  };
};
