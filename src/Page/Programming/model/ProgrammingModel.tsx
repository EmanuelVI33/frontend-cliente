export class ProgrammingModel {
  id?: number;
  title: string;
  turn: number;
  startTime: number;
  programingId: string;

  constructor(title: string, turn: number, startTime: number, programId) {
    this.title = title;
    this.turn = turn;
    this.startTime = startTime;
    this.programingId = programId;
  }
}
