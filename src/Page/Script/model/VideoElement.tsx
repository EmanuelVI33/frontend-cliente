import { ElementModel } from ".";
import { ElementOptions } from "./ElementOptions";

export class VideoModel extends ElementModel {
  constructor(options: ElementOptions) {
    super(options);
  }

  getAllAttributes(): ElementOptions {
    return this.getAtribute();
  }

  render(): JSX.Element {
    return (
      <>
        <p>Video</p>
        <p>{this.index + 1}</p>
      </>
    );
  }
}
