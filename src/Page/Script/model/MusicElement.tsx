import { ElementModel } from ".";
import { ElementOptions } from "./ElementOptions";

export class MusicModel extends ElementModel {
  name: string;
  author: string;

  constructor(options: ElementOptions) {
    super(options);
    this.name = options.name;
    this.author = options.author;
  }

  play(): JSX.Element {
    return (
      <>
        <p>Reproduciendo Música</p>
        {/* <audio controls>
          <source src={this.path} type="audio/mp3" />
          Tu navegador no soporta el elemento de audio.
        </audio> */}
      </>
    );
  }

  render(): JSX.Element {
    return (
      <>
        <p>Música</p>
        <p>Autho: {this.author}</p>
        <p>Name: {this.name}</p>
        <p>{this.index + 1}</p>
        {this.path ? (
          <audio src={this.path} about={this.author} />
        ) : (
          <div>
            <p>Contenido no generado</p>
            {/* <audio src={URL.createObjectURL(this.file)} about={this.author} /> */}
          </div>
        )}
      </>
    );
  }

  getAllAttributes(): ElementOptions {
    return {
      ...this.getAtribute(),
      author: this.author,
      name: this.name,
    };
  }
}
