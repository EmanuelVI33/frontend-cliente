import { ElementModel } from ".";
import { ElementEnum } from "./ElementEnum";

export class ImagenModel extends ElementModel {
  duration: number;

  constructor(duration: number) {
    super(ElementEnum.imagen);
    this.duration = duration;
  }

  play(): void {
    console.log("Playing image");
  }

  render(): JSX.Element {
    return (
      <>
        <p>Imagen</p>
        <p>{this.duration}</p>
      </>
    );
  }
}
