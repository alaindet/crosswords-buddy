import { Clue } from './clue.interface';
import { CluesMap } from './clues-map.interface';
import { SolvedCluesMap } from './solved-clues-map';

export interface State {
  clues: CluesMap;
  solvedClues: SolvedCluesMap;
  recentSearches: Clue[];
}
