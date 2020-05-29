import { Cell } from "./Cell";

export interface Article {
  atricle_id: string;
  user_id: string;
  cells: Cell[];
  title: string;
  heading_image: string;
  heading_image_caption: string;
}
