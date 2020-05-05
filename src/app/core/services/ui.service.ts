import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

import { DefinitionsService } from 'src/app/core/services/definitions.service';

@Injectable({
  providedIn: 'root'
})
export class UiService {

  private menuIsOpen$ = new BehaviorSubject<boolean>(false);

  constructor(
    private definitionsService: DefinitionsService,
  ) {}

  get menuIsOpen() {
    return this.menuIsOpen$.asObservable();
  }

  get direction () {
    return this.definitionsService.direction;
  }

  closeMenu() {
    this.menuIsOpen$.next(false);
  }

  openMenu() {
    this.menuIsOpen$.next(true);
  }

  toggleMenu() {
    this.menuIsOpen$.next(!this.menuIsOpen$.value);
  }
}
