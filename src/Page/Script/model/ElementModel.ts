import { ElementEnum } from "./ElementEnum";

export interface ElementModel {
  id?: number;
  path?: any;
  index?: number;
  type: string;

  play(): void;
}

abstract class BaseModel implements ElementModel {
  id?: number;
  path?: string;
  index?: number;
  type: string;

  constructor(type: string) {
    this.type = type;
  }

  abstract play(): void;
}

export class ImagenModel extends BaseModel {
  duration: number;

  constructor(duration: number) {
    super(ElementEnum.imagen);
    this.duration = duration;
  }

  play(): void {
    console.log("Playing image");
  }
}

export class MusicModel extends BaseModel {
  name: string;
  author: string;

  constructor(name: string, author: string) {
    super(ElementEnum.music);
    this.name = name;
    this.author = author;
  }

  play(): void {
    console.log("Playing music");
  }
}

export class PresenterVideoModel extends BaseModel {
  title: string;
  content: string;

  constructor(title: string, content: string) {
    super(ElementEnum.presenterVideo);
    this.title = title;
    this.content = content;
  }

  play(): void {
    console.log("Playing presenter video");
  }
}

export class VideoModel extends BaseModel {
  constructor() {
    super(ElementEnum.video);
  }

  play(): void {
    console.log("Playing video");
  }
}
