export type Track = {
  name: string;
  playcount: number;
  artist:string;
};
export type Artist = {
  name: string;
  listeners: number;
  playcount: number;
  image: string;
  tags: string[];
  tracks: Track[];
};
