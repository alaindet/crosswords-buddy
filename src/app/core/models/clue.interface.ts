import { Direction } from './direction.enum';

export interface Clue {
  id: number;
  clue: string;
  direction: Direction;
};
