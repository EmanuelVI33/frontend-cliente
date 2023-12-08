import { ElementModel } from ".";
import { ElementOptions } from "./ElementOptions";

export class PresenterVideoModel extends ElementModel {
  title: string;
  content: string;

  constructor(options: ElementOptions) {
    super(options);
    this.title = options.title;
    this.content = options.content;
  }

  render(): JSX.Element {
    console.log(this.path);
    return (
      <>
        <p>Presentador</p>
        <p>{this.title}</p>
        <p>{this.content}</p>
        <p>{this.index + 1}</p>
      </>
    );
  }

  getAllAttributes(): ElementOptions {
    return {
      ...this.getAtribute(),
      title: this.title,
      content: this.content,
    };
  }
}
