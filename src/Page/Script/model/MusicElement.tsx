import { ElementModel } from ".";
import { ElementEnum } from "./ElementEnum";

export class MusicModel extends ElementModel {
  name: string;
  author: string;

  constructor(name: string, author: string) {
    super(ElementEnum.music);
    this.name = name;
    this.author = author;
  }

  play(): void {
    console.log("Playing music");
  }

  render(): JSX.Element {
    return (
      <>
        <p>Música</p>
        <p>{this.author}</p>
        <p>{this.name}</p>
      </>
    );
  }
}
