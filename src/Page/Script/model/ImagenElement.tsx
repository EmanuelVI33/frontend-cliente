import { ElementModel } from ".";
import { ElementOptions } from "./ElementOptions";

export class ImagenModel extends ElementModel {
  duration: number;

  constructor(options: ElementOptions) {
    super(options);
    console.log(`Desde constructor ${options.duration}`);
    this.duration = options.duration;
  }

  render(): JSX.Element {
    return (
      <>
        <p>Imagen</p>
        <p>Duracción: {this.duration}</p>
        <p>{this.index + 1}</p>
      </>
    );
  }

  getAllAttributes(): ElementOptions {
    return {
      ...this.getAtribute(),
      duration: this.duration,
    };
  }
}
