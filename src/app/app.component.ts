import { environment } from 'src/environments/environment';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { NavigationEnd, Router, RouterEvent } from '@angular/router';
import { Subscription } from 'rxjs';

import { UiService } from 'src/app/core/services/ui.service';
import { AlertsService } from 'src/app/core/services/alerts.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit, OnDestroy {

  public env = environment;
  public subs: { [subName: string]: Subscription } = {};

  constructor(
    public ui: UiService,
    private alertsService: AlertsService,
    private router: Router,
  ) {}

  ngOnInit() {
    this.adjustViewportHeightUnit();
    this.subs.router = this.router.events.subscribe(
      this.routerEventsObserver.bind(this)
    );
  }

  ngOnDestroy() {
    for (const sub of Object.values(this.subs)) {
      sub.unsubscribe();
    }
  }

  onAlertDismiss() {
    this.alertsService.clearAlert();
  }

  private adjustViewportHeightUnit() {
    // https://css-tricks.com/the-trick-to-viewport-units-on-mobile/
    let vh = window.innerHeight * 0.01;
    document.documentElement.style.setProperty('--vh', `${vh}px`);
  }

  private routerEventsObserver(event: RouterEvent) {
    if (event instanceof NavigationEnd) {
      this.ui.closeMenu();
      this.ui.setUrl(this.router.url);
      return;
    }
  }
}
