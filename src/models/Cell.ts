import { Metadata } from "./metadata";

export interface Cell {
  cell_type: string;
  metadata: Metadata;
  content: [string];
  original_author: string;
  contributors: [string];
}
