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
        <video width="320" height="320" controls>
          <>
            <source
              src={`${import.meta.env.VITE_BASE_URL}/${this.path}`}
              // src="http://localhost:3010/public/video/tlk_6cJrUe0SVBA1gcQ7WWSd_.mp4"
              type="video/mp4"
            />
            <p>Tu navegador no soporta el elemento de video.</p>
            <p>{`${import.meta.env.VITE_BASE_URL}/${this.path}`}</p>
          </>
        </video>
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
