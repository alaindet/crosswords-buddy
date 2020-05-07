import { Component, ChangeDetectionStrategy, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { AlertsService } from 'src/app/core/services/alerts.service';
import { CluesService } from 'src/app/core/services/clues.service';
import { UiService } from 'src/app/core/services/ui.service';
import DEMO from 'src/app/core/data/demo.const';

@Component({
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SettingsPageComponent implements OnInit {

  constructor(
    private ui: UiService,
    private alertsService: AlertsService,
    private cluesService: CluesService,
    private route: ActivatedRoute,
    private router: Router,
  ) {}

  ngOnInit() {
    this.ui.setTitle(this.route.snapshot.data.title);
  }

  onLoad() {
    console.log('Store data into localStorage');
  }

  onLoadDemoData() {
    this.cluesService.setClues(DEMO);
    this.cluesService.clearRecentClues();
    this.alertsService.setSuccessAlert('Success!', 'You loaded the demo data');
    this.router.navigate(['/']);
  }
}
