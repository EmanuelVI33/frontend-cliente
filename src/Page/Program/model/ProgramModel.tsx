export class ProgramModel {
  id?: number;
  name: string;
  duration: number;

  constructor(name: string, duration: number) {
    // if (id) this.id = id;
    this.name = name;
    this.duration = duration;
  }
}
