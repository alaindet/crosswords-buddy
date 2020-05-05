import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

import { Direction } from 'src/app/core/models/direction.enum';
import { Definition } from 'src/app/core/models/definition.interface';
import { DefinitionsMap } from 'src/app/core/models/definitions-map.interface';
import { SolvedDefinitionsMap } from 'src/app/core/models/solved-definitions-map.interface';

@Injectable({
  providedIn: 'root'
})
export class DefinitionsService {

  RECENT_ENTRIES_LIMIT = 10;

  private direction$ = new BehaviorSubject<Direction>(Direction.Horizontal);
  private definitions$ = new BehaviorSubject<DefinitionsMap | null>(null);
  private recentEntries$ = new BehaviorSubject<Definition[]>([]);
  private solvedEntries$ = new BehaviorSubject<SolvedDefinitionsMap>({
    [Direction.Horizontal]: {},
    [Direction.Vertical]: {},
  });

  get direction() {
    return this.direction$.asObservable();
  }

  get definitions() {
    return this.definitions$.asObservable();
  }

  get recentEntries() {
    return this.recentEntries$.asObservable();
  }

  get solvedEntries() {
    return this.solvedEntries$.asObservable();
  }

  setDirection(dir: Direction) {
    this.direction$.next(dir);
  }

  setDefinitions(definitions: DefinitionsMap) {
    this.definitions$.next(definitions);
  }

  clearRecentEntries() {
    this.recentEntries$.next([]);
  }

  addRecent(entry: Definition) {
    let entries = [entry, ...this.recentEntries$.value];

    if (entries.length > this.RECENT_ENTRIES_LIMIT) {
      entries = entries.slice(0, -1);
    }

    this.recentEntries$.next(entries);
  }

  addSolved(entry: Definition) {
    const entries = this.solvedEntries$.value;
    entries[entry.direction][entry.id] = true;
    this.solvedEntries$.next(entries);
  }
}
