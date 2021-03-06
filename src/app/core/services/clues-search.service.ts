import { Injectable, OnDestroy } from '@angular/core';
import { BehaviorSubject, Subscription } from 'rxjs';

import { Direction } from 'src/app/core/models/direction.enum';
import { Clue } from 'src/app/core/models/clue.interface';
import { CluesMap } from 'src/app/core/models/clues-map.interface';
import { UtilsService } from './utils.service';
import { CluesService } from './clues.service';

@Injectable({
  providedIn: 'root'
})
export class CluesSearchService implements OnDestroy {

  search: () => void;
  private direction$ = new BehaviorSubject<Direction>(Direction.Across);
  private query$ = new BehaviorSubject<string>('');
  private results$ = new BehaviorSubject<Clue[]>([]);
  private subs: { [name: string]: Subscription } = {};

  constructor(
    private cluesService: CluesService,
    private utils: UtilsService,
  ) {
    this.search = this.utils.debounce(this._search, 200);
  }

  ngOnDestroy() {
    for (const sub of Object.values(this.subs)) {
      sub.unsubscribe();
    }
  }

  get searchDirection() {
    return this.direction$.asObservable();
  }

  get searchQuery() {
    return this.query$.asObservable();
  }

  get searchResults() {
    return this.results$.asObservable();
  }

  setDirection(dir: Direction) {
    this.direction$.next(dir);
  }

  addToSearchQuery(digit: number) {
    const _digit = '' + digit;
    this.query$.next(this.query$.value + _digit);
  }

  removeFromSearchQuery() {
    this.query$.next(this.query$.value.slice(0, -1));
  }

  clearSearchQuery() {
    this.query$.next('');
  }

  private _search() {
    this.subs.results = this.cluesService.clues.subscribe((clues: CluesMap) => {

      const results: Clue[] = [];
      const dir = this.direction$.getValue();
      const query = this.query$.getValue();

      // Extract IDs for given direction
      const sameDirMap = clues[dir];
      const ids = Object.keys(sameDirMap);

      // Perform filtering
      const matchingIds = ids.filter(
        (key: string): boolean => key.startsWith(query)
      );

      // Transform keys to clues
      for (const id of matchingIds) {
        results.push({
          id: id,
          clue: clues[dir][id],
          direction: dir
        });
      }

      // Update results
      this.results$.next(results);
    });
  }

  /**
   * Works only with positive integers
   *
   * @param input number
   * @return number
   */
  private countDigits(input: number): number {

    if (input === 0) {
      return 1;
    }

    let temp = input;
    let digits = 0;

    while (temp >= 1) {
      temp /= 10;
      digits++;
    }

    return digits;
  }
}
