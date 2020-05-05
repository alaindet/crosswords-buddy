import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

import { Direction } from 'src/app/core/models/direction.enum';

@Injectable({
  providedIn: 'root'
})
export class DefinitionsService {

  private direction$ = new BehaviorSubject<Direction>(Direction.Horizontal);

  get direction() {
    return this.direction$.asObservable();
  }

  setDirection(dir: Direction) {
    this.direction$.next(dir);
  }
}
