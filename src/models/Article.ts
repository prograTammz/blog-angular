import { Cell } from "./Cell";

export interface Article {
  user_id: string;
  cells: [Cell];
  title: string;
  heading_image: string;
  heading_image_caption: string;
}
