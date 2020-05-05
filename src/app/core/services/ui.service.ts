import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Title } from '@angular/platform-browser';

import { AlertsService } from 'src/app/core/services/alerts.service';
import { DefinitionsService } from 'src/app/core/services/definitions.service';
import { LinkDefinition } from 'src/app/core/models/link-definition.interface';
import LINKS from 'src/app/core/data/links.const';

@Injectable({
  providedIn: 'root'
})
export class UiService {

  private loading$ = new BehaviorSubject<boolean>(false);
  private menuIsOpen$ = new BehaviorSubject<boolean>(false);
  private menuLinks$ = new BehaviorSubject<LinkDefinition[]>(LINKS)
  private title$ = new BehaviorSubject<string>('CrosswordsBuddy');
  private controlsAreOpen$ = new BehaviorSubject<boolean>(true);

  constructor(
    private titleService: Title,
    private definitionsService: DefinitionsService,
    private alertsService: AlertsService,
  ) {}

  get loading() {
    return this.loading$.asObservable();
  }

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

  get alert() {
    return this.alertsService.alert;
  }

  isLoading() {
    this.loading$.next(true);
  }

  hasLoaded() {
    this.loading$.next(false);
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
