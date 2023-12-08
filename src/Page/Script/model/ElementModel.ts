import { ElementOptions } from "./ElementOptions";

export interface Element {
  render(): JSX.Element;
  getAllAttributes(): ElementOptions;
}

export abstract class ElementModel implements Element {
  path?: string;
  index: number;
  type: string;
  file: File;
  isChanged?: boolean = false;

  constructor(options: ElementOptions) {
    this.type = options.type;
    this.index = options.index;
    this.path = options.path;
    this.file = options.file;
  }

  getAtribute() {
    return {
      path: this.path,
      index: this.index,
      type: this.type,
      file: this.file,
    };
  }

  abstract render(): JSX.Element;
  abstract getAllAttributes(): ElementOptions;
}
