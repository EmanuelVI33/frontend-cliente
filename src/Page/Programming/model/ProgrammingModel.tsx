export class ProgrammingModel {
  id?: number;
  title: string;
  turn: number;
  startTime: string;
  programId: number;

  constructor(
    title: string,
    turn: number,
    startTime: string,
    programId: number
  ) {
    this.title = title;
    this.turn = turn;
    this.startTime = startTime;
    this.programId = programId;
  }
}
