import { ProgrammingModel } from "@/Page/Programming/model/ProgrammingModel";

export class Element {
  id: number;
  path: string;
  index: number;
  type: string;
  typeInfo: any;

  programming?: ProgrammingModel;

  constructor(
    id: number,
    path: string,
    index: number,
    type: string,
    typeInfo: any
  ) {
    this.id = id;
    this.path = path;
    this.index = index;
    this.type = type;
    this.typeInfo = typeInfo;
  }
}
