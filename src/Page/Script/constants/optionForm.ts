import { ElementEnum } from "../model/ElementEnum";

interface Option {
  type: ElementEnum;
  field: Array<{
    name: string;
    type: "text" | "number" | "file"; // Agrega más tipos según sea necesario
    label: string;
    accept?: string;
  }>;
}

export const options: Option[] = [
  {
    type: ElementEnum.music,
    field: [
      { name: "name", type: "text", label: "Nombre" },
      { name: "author", type: "text", label: "Autor" },
      { name: "path", type: "file", label: "Audio", accept: "audio/*" },
    ],
  },
  {
    type: ElementEnum.imagen,
    field: [
      { name: "duration", type: "number", label: "Duración" },
      {
        name: "path",
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
      { name: "path", type: "file", label: "Subir video", accept: "video/*" },
    ],
  },
];
