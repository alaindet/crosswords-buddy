import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Title } from '@angular/platform-browser';

import { DefinitionsService } from 'src/app/core/services/definitions.service';
import { LinkDefinition } from 'src/app/core/models/link-definition.interface';
import { LINKS } from 'src/app/core/data/links.const';

@Injectable({
  providedIn: 'root'
})
export class UiService {

  private menuIsOpen$ = new BehaviorSubject<boolean>(false);
  private menuLinks$ = new BehaviorSubject<LinkDefinition[]>(LINKS)
  private title$ = new BehaviorSubject<string>('CrosswordsBuddy');
  private controlsAreOpen$ = new BehaviorSubject<boolean>(true);

  constructor(
    private definitionsService: DefinitionsService,
    private titleService: Title,
  ) {}

  get menuIsOpen() {
    return this.menuIsOpen$.asObservable();
  }

  get menuLinks() {
    return this.menuLinks$.asObservable();
  }

  get title() {
    return this.title$.asObservable();
  }

  get direction () {
    return this.definitionsService.direction;
  }

  get controlsAreOpen() {
    return this.controlsAreOpen$.asObservable();
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

  setTitle(title: string) {
    this.title$.next(title);
    this.titleService.setTitle(`CrosswordsBuddy - ${title}`);
  }

  toggleControls() {
    this.controlsAreOpen$.next(!this.controlsAreOpen$.value);
  }
}
