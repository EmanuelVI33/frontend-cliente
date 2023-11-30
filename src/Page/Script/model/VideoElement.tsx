import { ElementModel } from ".";
import { ElementEnum } from "./ElementEnum";

export class VideoModel extends ElementModel {
  constructor() {
    super(ElementEnum.video);
  }

  play(): void {
    console.log("Playing video");
  }

  render(): JSX.Element {
    return (
      <>
        <p>Video</p>
      </>
    );
  }
}
