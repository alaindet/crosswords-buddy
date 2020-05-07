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
  private direction$ = new BehaviorSubject<Direction>(Direction.Horizontal);
  private query$ = new BehaviorSubject<number>(0);
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
    this.query$.next(this.query$.value * 10 + digit);
  }

  removeFromSearchQuery() {
    this.query$.next(Math.floor(this.query$.value / 10));
  }

  clearSearchQuery() {
    this.query$.next(0);
  }

  private _search() {
    this.subs.results = this.cluesService.clues.subscribe((clues: CluesMap) => {

      const results: Clue[] = [];
      const dir = this.direction$.getValue();
      const query = this.query$.getValue();

      // Extract IDs for given direction
      const sameDirMap = clues[dir];
      const ids = Object.keys(sameDirMap).map(key => +key);

      // Perform filtering
      const matchingIds = ids.filter((key: number): boolean => {
        const digitsDiff = this.countDigits(key) - this.countDigits(query);
        if (digitsDiff < 0) {
          return false;
        }
        const dividend = 10 ** digitsDiff;
        const keySlice = Math.floor(key / dividend);
        return keySlice === query;
      });

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
