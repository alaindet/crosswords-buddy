import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

import { Clue } from 'src/app/core/models/clue.interface';
import { CluesMap } from 'src/app/core/models/clues-map.interface';

@Injectable({
  providedIn: 'root'
})
export class CluesService {

  RECENT_ENTRIES_LIMIT = 10;

  private clues$ = new BehaviorSubject<CluesMap | null>(null);
  private recentClues$ = new BehaviorSubject<Clue[]>([]);

  get clues() {
    return this.clues$.asObservable();
  }

  get recentClues() {
    return this.recentClues$.asObservable();
  }

  setClues(clues: CluesMap) {
    this.clues$.next(clues);
  }

  clearRecentClues() {
    this.recentClues$.next([]);
  }

  addRecentClue(clue: Clue) {

    // Filter out this clue if already recent
    let clues = this.recentClues$.value.filter(
      recent => !(recent.id === clue.id && recent.direction === clue.direction)
    );

    // Add new recent clue
    clues = [clue, ...clues];

    // Trim oldest clues
    if (clues.length > this.RECENT_ENTRIES_LIMIT) {
      clues = clues.slice(0, -1);
    }

    this.recentClues$.next(clues);
  }
}
