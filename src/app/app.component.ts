import { environment } from 'src/environments/environment';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { NavigationEnd, Router, RouterEvent } from '@angular/router';
import { Subscription } from 'rxjs';

import { AlertsService } from 'src/app/core/services/alerts.service';
import { UiService } from 'src/app/core/services/ui.service';

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
    private router: Router,
    private alerts: AlertsService,
  ) {}

  ngOnInit() {
    this.subs.router = this.router.events.subscribe(
      this.routerEventsObserver.bind(this)
    );

    // this.alerts.setErrorAlert('Hello World', 'Something went awesomely well');
  }

  ngOnDestroy() {
    for (const sub of Object.values(this.subs)) {
      sub.unsubscribe();
    }
  }

  onAlertDismiss() {
    this.alerts.clearAlert();
  }

  private routerEventsObserver(event: RouterEvent) {
    if (event instanceof NavigationEnd) {
      this.ui.closeMenu();
      return;
    }
  }
}
