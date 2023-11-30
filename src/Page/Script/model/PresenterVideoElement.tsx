import { ElementModel } from ".";
import { ElementEnum } from "./ElementEnum";

export class PresenterVideoModel extends ElementModel {
  title: string;
  content: string;

  constructor(title: string, content: string) {
    super(ElementEnum.presenterVideo);
    this.title = title;
    this.content = content;
  }

  play(): void {
    console.log("Playing presenter video");
  }

  render(): JSX.Element {
    console.log(this.path);
    return (
      <>
        <p>Presentador</p>
        <p>{this.title}</p>
        <p>{this.content}</p>
      </>
    );
  }
}
