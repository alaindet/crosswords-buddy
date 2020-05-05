import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { map } from 'rxjs/operators';
import { Title } from '@angular/platform-browser';

import { AlertsService } from 'src/app/core/services/alerts.service';
import { CluesService } from 'src/app/core/services/clues.service';
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
    private cluesService: CluesService,
    private alertsService: AlertsService,
  ) {}

  get loading() {
    return this.loading$.asObservable();
  }

  get loaded() {
    return this.loading$.asObservable().pipe(
      map(loading => !loading)
    );
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
    return this.cluesService.direction;
  }

  get recentSearches() {
    return this.cluesService.recentSearches;
  }

  get recentSearchesCount() {
    return this.cluesService.recentSearches.pipe(map(items => items.length));
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
