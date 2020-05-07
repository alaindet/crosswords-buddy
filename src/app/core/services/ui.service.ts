import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { map } from 'rxjs/operators';
import { Title } from '@angular/platform-browser';

import { LinkDefinition } from 'src/app/core/models/link-definition.interface';
import { AlertsService } from 'src/app/core/services/alerts.service';
import { CluesService } from 'src/app/core/services/clues.service';
import { CluesSearchService } from 'src/app/core/services/clues-search.service';
import LINKS from 'src/app/core/data/links.const';

@Injectable({
  providedIn: 'root'
})
export class UiService {

  private loading$ = new BehaviorSubject<boolean>(false);
  private menuIsOpen$ = new BehaviorSubject<boolean>(false);
  private menuLinks$ = new BehaviorSubject<LinkDefinition[]>(LINKS)
  private title$ = new BehaviorSubject<string>('Crosswords Buddy');
  private controlsAreOpen$ = new BehaviorSubject<boolean>(true);
  private url$ = new BehaviorSubject<string>('');

  constructor(
    private titleService: Title,
    private cluesService: CluesService,
    private cluesSearchService: CluesSearchService,
    private alertsService: AlertsService,
  ) {}

  get searchQuery() {
    return this.cluesSearchService.searchQuery;
  }

  get searchResults() {
    return this.cluesSearchService.searchResults;
  }

  get searchDirection() {
    return this.cluesSearchService.searchDirection;
  }

  get url() {
    return this.url$.asObservable();
  }

  get loading() {
    return this.loading$.asObservable();
  }

  get loaded() {
    return this.loading$.asObservable().pipe(map(loading => !loading));
  }

  get areCluesLoaded() {
    return this.cluesService.clues.pipe(map(clues => !!clues));
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

  get recentClues() {
    return this.cluesService.recentClues;
  }

  get recentCluesCount() {
    return this.cluesService.recentClues.pipe(map(items => items.length));
  }

  get controlsAreOpen() {
    return this.controlsAreOpen$.asObservable();
  }

  get alert() {
    return this.alertsService.alert;
  }

  setUrl(url: string) {
    this.url$.next(url);
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
    this.titleService.setTitle(`Crosswords Buddy - ${title}`);
  }

  toggleControls() {
    this.controlsAreOpen$.next(!this.controlsAreOpen$.value);
  }
}
