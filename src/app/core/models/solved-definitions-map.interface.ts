import { Direction } from './direction.enum';

export interface SolvedDefinitionsMap {
  [Direction.Horizontal]: {
    [id: number]: boolean;
  }
  [Direction.Vertical]: {
    [id: number]: boolean;
  }
}
