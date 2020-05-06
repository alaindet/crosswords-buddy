import { Direction } from 'src/app/core/models/direction.enum';

export interface SameDirectionCluesMap {
  [id: number]: string;
}

export interface CluesMap {
  [Direction.Horizontal]: SameDirectionCluesMap;
  [Direction.Vertical]: SameDirectionCluesMap;
}
