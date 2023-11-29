import { Element } from "./Element";
import {
  ImagenModel,
  MusicModel,
  PresenterVideoModel,
} from "./ElementInterface";

import { Element } from "./Element";
import {
  ImagenModel,
  MusicModel,
  PresenterVideoModel,
} from "./ElementInterface";

export type ElementType = "imagen" | "music" | "presenterVideo";

export class ElementFactory {
  static createElement(
    id: number,
    path: string,
    index: number,
    type: ElementType,
    model: ImagenModel | MusicModel | PresenterVideoModel
  ): Element {
    switch (type) {
      case "imagen":
        return new Element(id, path, index, type, {
          duration: (model as ImagenModel).duration,
        });
      case "music":
        return new Element(id, path, index, type, {
          name: (model as MusicModel).name,
          author: (model as MusicModel).author,
        });
      case "presenterVideo":
        return new Element(id, path, index, type, {
          title: (model as PresenterVideoModel).title,
          content: (model as PresenterVideoModel).content,
        });
      default:
        throw new Error(`Invalid element type: ${type}`);
    }
  }
}
