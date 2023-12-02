import {
  ElementModel,
  ImagenModel,
  MusicModel,
  PresenterVideoModel,
  VideoModel,
} from ".";
import { ElementEnum } from "./ElementEnum";
import { ElementOptions } from "./ElementOptions";

export class ElementFactory {
  static createElement(options: ElementOptions): ElementModel {
    console.log(options);
    switch (options.type) {
      case ElementEnum.imagen:
        return new ImagenModel(options);
      case ElementEnum.music:
        return new MusicModel(options);
      case ElementEnum.presenterVideo:
        return new PresenterVideoModel(options);
      case ElementEnum.video:
        return new VideoModel(options);
      default:
        throw new Error("Tipo de elemento no válido");
    }
  }
}
