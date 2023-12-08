import { ElementEnum } from "../model/ElementEnum";

export interface FormField {
  name: string;
  type: "text" | "number" | "date" | "file"; // Puedes agregar más tipos según sea necesario
  label: string;
  accept?: string;
}

interface Option {
  type: ElementEnum;
  field: FormField[];
}

export const options: Option[] = [
  {
    type: ElementEnum.music,
    field: [
      { name: "name", type: "text", label: "Nombre" },
      { name: "author", type: "text", label: "Autor" },
      { name: "file", type: "file", label: "Audio", accept: "audio/*" },
    ],
  },
  {
    type: ElementEnum.imagen,
    field: [
      { name: "duration", type: "number", label: "Duración" },
      {
        name: "file",
        type: "file",
        label: "Subir Imagén",
        accept: "imagen/*",
      },
    ],
  },
  {
    type: ElementEnum.presenterVideo,
    field: [
      { name: "title", type: "text", label: "Título" },
      { name: "content", type: "text", label: "Contenido" },
    ],
  },
  {
    type: ElementEnum.video,
    field: [
      { name: "title", type: "text", label: "Título" },
      { name: "file", type: "file", label: "Subir video", accept: "video/*" },
    ],
  },
];
