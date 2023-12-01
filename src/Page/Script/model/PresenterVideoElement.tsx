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

  play(): JSX.Element {
    return (
      <>
        <p>Reproduciendo Video Presenter</p>
        {this.path ? (
          <video width="320" height="240" controls>
            <>
              <source src={this.path} type="video/*" />
              <p>Tu navegador no soporta el elemento de video.</p>
            </>
          </video>
        ) : (
          <>
            <p>Contenido no generado</p>
            {/* <source src={URL.createObjectURL(this.file)} type="video/*" /> */}
          </>
        )}
      </>
    );
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
