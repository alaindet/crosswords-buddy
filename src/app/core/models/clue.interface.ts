import { Direction, Dir } from './direction.enum';

export interface Clue {
  id: number;
  clue: string;
  direction: Direction;
  dir?: Dir;
};
