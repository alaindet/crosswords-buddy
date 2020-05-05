import { Component, ChangeDetectionStrategy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { UiService } from 'src/app/core/services/ui.service';
import { AlertsService } from 'src/app/core/services/alerts.service';

@Component({
  templateUrl: './alerts.component.html',
  styleUrls: ['./alerts.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TestAlertsComponent implements OnInit {

  constructor(
    private alerts: AlertsService,
    private ui: UiService,
    private route: ActivatedRoute,
  ) {}

  ngOnInit() {
    this.ui.setTitle(this.route.snapshot.data.title);
  }

  onShowSuccessAlert() {
    this.alerts.setSuccessAlert('Success!', 'Something great happened');
  }

  onShowErrorAlert() {
    this.alerts.setErrorAlert('Error!', 'Something nasty happened');
  }
}
