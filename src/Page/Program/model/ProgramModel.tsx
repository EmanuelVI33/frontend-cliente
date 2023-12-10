import { Dayjs } from "dayjs";

export class ProgramModel {
  id?: number;
  name: string;
  duration: string | Dayjs;
  description: string;
  cover: string;
  host: string;
  coverUrl?: string;
  photoUrl?: string;

  constructor(
    name: string,
    duration: string,
    description = "",
    cover = "",
    host = "",
    id?: number
  ) {
    this.id = id;
    this.name = name;
    this.duration = duration;
    this.description = description;
    this.cover = cover;
    this.host = host;
  }
}
