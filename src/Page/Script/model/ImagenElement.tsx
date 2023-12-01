import { ElementModel } from ".";
import { ElementOptions } from "./ElementOptions";

export class ImagenModel extends ElementModel {
  duration: number;

  constructor(options: ElementOptions) {
    super(options);
    console.log(`Desde constructor ${options.duration}`);
    this.duration = options.duration;
  }

  play(): JSX.Element {
    console.log(this.path);
    return (
      <>
        {this.path ? (
          <img src={this.path} alt={this.type} />
        ) : (
          <div>
            <p>Contenido no generado</p>
            {/* <img src={URL.createObjectURL(this.file)} alt={this.type} /> */}
          </div>
        )}
      </>
    );
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
