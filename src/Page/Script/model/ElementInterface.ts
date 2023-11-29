export interface ElementInterface {
  id?: number;
  path?: string;
  index?: number;
  type: string;
}

export interface ImagenModel extends ElementInterface {
  duration: number;
}

export interface MusicModel extends ElementInterface {
  name: string;
  author: string;
}

export interface PresenterVideoModel extends ElementInterface {
  title: string;
  content: string;
}

export interface AudioModel extends ElementInterface {
  title: string;
  content: string;
}
