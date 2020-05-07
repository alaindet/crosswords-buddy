import { Direction, Dir } from './direction.enum';

export interface Clue {
  id: string;
  clue: string;
  direction: Direction;
  dir?: Dir;
};
