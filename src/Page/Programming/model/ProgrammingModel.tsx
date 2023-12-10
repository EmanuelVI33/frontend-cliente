// import { ElementModel } from "@/Page/Script/model";s

export class ProgrammingModel {
  id?: number;
  title: string;
  turn: string;
  startTime: string;
  description?: string;
  duration: string;
  presenter: string;
  programId: string;
  // Array de solo los path de los elements
  elements: string[] = [];

  constructor(
    id: number,
    title: string,
    turn: string,
    startTime: string,
    description: string = "Programación",
    duration: string,
    presenter: string,
    programId: string,
    elements: string[]
  ) {
    this.id = id;
    this.title = title;
    this.turn = turn;
    this.startTime = startTime;
    this.programId = programId;
    this.description = description;
    this.duration = duration;
    this.presenter = presenter;
    this.elements = elements;
  }
}
