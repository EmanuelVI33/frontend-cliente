import { ElementModel } from "@/Page/Script/model";

export class ProgrammingModel {
  id?: number;
  title: string;
  turn: number;
  startTime: string;
  programId: number;
  elements: ElementModel[];

  constructor(
    id: number,
    title: string,
    turn: number,
    startTime: string,
    programId: number
  ) {
    this.id = id;
    this.title = title;
    this.turn = turn;
    this.startTime = startTime;
    this.programId = programId;
    this.elements = [];
  }
}
