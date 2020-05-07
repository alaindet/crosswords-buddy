import { Clue } from './clue.interface';
import { CluesMap } from './clues-map.interface';

export interface State {
  clues: CluesMap;
  recentSearches: Clue[];
}
