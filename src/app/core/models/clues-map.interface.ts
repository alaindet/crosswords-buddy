import { Direction } from 'src/app/core/models/direction.enum';

export interface CluesMap {
  [Direction.Horizontal]: {
    [id: number]: string;
  };
  [Direction.Vertical]: {
    [id: number]: string;
  };
}
