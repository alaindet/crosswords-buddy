import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

import { Clue } from 'src/app/core/models/clue.interface';
import { CluesMap } from 'src/app/core/models/clues-map.interface';

@Injectable({
  providedIn: 'root'
})
export class CluesService {

  RECENT_CLUES_LIMIT = 10;
  LOCAL_STORAGE_KEY = 'CROSSWORDS_BUDDY';

  private clues$ = new BehaviorSubject<CluesMap | null>(null);
  private recentClues$ = new BehaviorSubject<Clue[]>([]);

  constructor() {
    this.fetchClues();
  }

  get clues() {
    return this.clues$.asObservable();
  }

  get recentClues() {
    return this.recentClues$.asObservable();
  }

  storeClues(clues: CluesMap) {
    window.localStorage.setItem(this.LOCAL_STORAGE_KEY, JSON.stringify(clues));
  }

  fetchClues() {
    const item = window.localStorage.getItem(this.LOCAL_STORAGE_KEY);
    if (item) {
      this.setClues(JSON.parse(item))
    }
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
    if (clues.length > this.RECENT_CLUES_LIMIT) {
      clues = clues.slice(0, -1);
    }

    this.recentClues$.next(clues);
  }
}
