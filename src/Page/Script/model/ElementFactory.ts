import {
  ElementModel,
  ImagenModel,
  MusicModel,
  PresenterVideoModel,
  VideoModel,
} from ".";
import { ElementEnum } from "./ElementEnum";

interface ElementOptions {
  [key: string]: any;
}

// Implementación de la fábrica concreta
export class ElementFactory {
  static createElement(options: ElementOptions): ElementModel {
    switch (options.type) {
      case ElementEnum.imagen:
        return new ImagenModel(options.duration || 10);
      case ElementEnum.music:
        return new MusicModel(
          options.name || "Song",
          options.author || "Artist"
        );
      case ElementEnum.presenterVideo:
        return new PresenterVideoModel(
          options.title || "Presentation",
          options.content || "Content"
        );
      case ElementEnum.video:
        return new VideoModel();
      default:
        throw new Error("Tipo de elemento no válido");
    }
  }
}
