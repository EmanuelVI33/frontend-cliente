import { ElementModel } from ".";
import { ElementOptions } from "./ElementOptions";

export class VideoModel extends ElementModel {
  constructor(options: ElementOptions) {
    super(options);
  }

  play(): JSX.Element {
    return (
      <>
        <p>Reproduciendo Video</p>
        <video width="320" height="240" controls>
          {this.path ? (
            <>
              <source src={this.path} type="video/*" />
              <p>Tu navegador no soporta el elemento de video.</p>
            </>
          ) : (
            <>
              <p>Contenido no generado</p>
              {/* <source src={URL.createObjectURL(this.file)} type="video/*" /> */}
            </>
          )}
        </video>
      </>
    );
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
