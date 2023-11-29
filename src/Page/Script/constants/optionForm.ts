interface Option {
  type: string;
  field: Array<{
    name: string;
    type: "text" | "number" | "file"; // Agrega más tipos según sea necesario
    label: string;
    accept?: string;
  }>;
}

export const options: Option[] = [
  {
    type: "music",
    field: [
      { name: "name", type: "text", label: "Nombre" },
      { name: "author", type: "text", label: "Autor" },
      { name: "audio", type: "file", label: "Audio", accept: "audio/*" },
    ],
  },
  {
    type: "imagen",
    field: [
      { name: "duration", type: "number", label: "Duración" },
      {
        name: "imagen",
        type: "file",
        label: "Subir Imagén",
        accept: "imagen/*",
      },
    ],
  },
  {
    type: "presenter",
    field: [
      { name: "title", type: "text", label: "Título" },
      { name: "content", type: "text", label: "Contenido" },
    ],
  },
  {
    type: "video",
    field: [
      { name: "title", type: "text", label: "Título" },
      { name: "video", type: "file", label: "Subir video", accept: "video/*" },
    ],
  },
];
