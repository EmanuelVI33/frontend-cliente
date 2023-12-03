export class ProgramModel {
  id?: string;
  name: string;
  duration: string;
  description: string;
  cover: string;
  presenter: string;

  constructor(
    name: string,
    duration: string,
    description = "",
    cover = "",
    presenter = "",
    id?: string
  ) {
    this.id = id;
    this.name = name;
    this.duration = duration;
    this.description = description;
    this.cover = cover;
    this.presenter = presenter;
  }
}
