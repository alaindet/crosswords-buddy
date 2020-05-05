import { Direction } from './direction.enum';

export interface Clue {
  id: number;
  definition: string;
  direction: Direction;
};
