import { ElementModel } from "@/Page/Script/model";

export class ProgrammingModel {
  id?: number;
  title: string;
  startTime: string;
  description: string;
  duration: string;
  host: string;
  photoUrl?: string;
  programId: number;
  elements?: ElementModel[];

  constructor(
    id: number,
    title: string,
    startTime: string,
    description: string = "Programación",
    duration: string,
    host: string,
    programId: number
  ) {
    this.id = id;
    this.title = title;
    this.startTime = startTime;
    this.programId = programId;
    this.description = description;
    this.duration = duration;
    this.host = host;
    this.elements = [];
  }
}
