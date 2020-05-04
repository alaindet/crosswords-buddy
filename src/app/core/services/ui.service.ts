import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UiService {

  private menuIsOpen$ = new BehaviorSubject<boolean>(false);

  get menuIsOpen() {
    return this.menuIsOpen$.asObservable();
  }

  public closeMenu(): void {
    this.menuIsOpen$.next(false);
  }

  public openMenu(): void {
    this.menuIsOpen$.next(true);
  }

  public toggleMenu(): void {
    this.menuIsOpen$.next(!this.menuIsOpen$.value);
  }
}
