import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

import { Direction } from 'src/app/core/models/direction.enum';
import { Clue } from 'src/app/core/models/clue.interface';
import { CluesMap } from 'src/app/core/models/clues-map.interface';
import { SolvedCluesMap } from 'src/app/core/models/solved-clues-map';

@Injectable({
  providedIn: 'root'
})
export class CluesService {

  RECENT_ENTRIES_LIMIT = 10;

  private clues$ = new BehaviorSubject<CluesMap | null>(null);
  private recentSearches$ = new BehaviorSubject<Clue[]>([]);
  private solvedClues$ = new BehaviorSubject<SolvedCluesMap>({
    [Direction.Horizontal]: {},
    [Direction.Vertical]: {},
  });

  get clues() {
    return this.clues$.asObservable();
  }

  get recentSearches() {
    return this.recentSearches$.asObservable();
  }

  get solvedClues() {
    return this.solvedClues$.asObservable();
  }

  setClues(clues: CluesMap) {
    this.clues$.next(clues);
  }

  clearRecentEntries() {
    this.recentSearches$.next([]);
  }

  addRecentSearch(clue: Clue) {
    let clues = [clue, ...this.recentSearches$.value];

    if (clues.length > this.RECENT_ENTRIES_LIMIT) {
      clues = clues.slice(0, -1);
    }

    this.recentSearches$.next(clues);
  }

  addSolvedClue(clue: Clue) {
    const clues = this.solvedClues$.value;
    clues[clue.direction][clue.id] = true;
    this.solvedClues$.next(clues);
  }
}
