import { Direction } from './direction.enum';

export interface SolvedCluesMap {
  [Direction.Horizontal]: {
    [id: number]: boolean;
  }
  [Direction.Vertical]: {
    [id: number]: boolean;
  }
}
