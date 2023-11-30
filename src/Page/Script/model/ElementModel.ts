export interface Element {
  play(): void;
  render(): JSX.Element;
}

export abstract class ElementModel implements Element {
  id?: number;
  path?: string;
  index?: number;
  type: string;

  constructor(type: string) {
    this.type = type;
  }

  abstract play(): void;
  abstract render(): JSX.Element;
}
