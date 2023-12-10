// import { ElementModel } from "@/Page/Script/model";s

export class ProgrammingModel {
  id?: number;
  title: string;
  startTime: string;
  description: string;
  duration: string;
  host: string;
  photoUrl?: string;
  programId: number;

  // Array de solo los path de los elements
  elements: string[] = [];


  constructor(
    id: number,
    title: string,
    startTime: string,
    description: string = "Programación",
    duration: string,

    host: string,
    programId: number
    elements: string[]

  ) {
    this.id = id;
    this.title = title;
    this.startTime = startTime;
    this.programId = programId;
    this.description = description;
    this.duration = duration;

    this.host = host;
    this.elements = elements;
  }
}
