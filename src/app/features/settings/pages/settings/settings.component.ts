import { Component, ChangeDetectionStrategy, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { CluesMap } from 'src/app/core/models/clues-map.interface';
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

  demo = `{
  "across": {
    "1": "The first across clue",
    "2": "The second across clue"
  },
  "down": {
    "1": "The first down clue",
    "2": "The second down clue"
  }
}`;

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

  onFileLoad(data: string) {
    this.load(JSON.parse(data), 'You loaded a new database');
  }

  onLoadDemoData() {
    this.load(DEMO, 'You loaded the demo database');
  }

  private load(data: CluesMap, alert: string) {
    window.localStorage.setItem('CROSSWORDS_BUDDY', JSON.stringify(data));
    this.cluesService.setClues(data);
    this.cluesService.clearRecentClues();
    this.alertsService.setSuccessAlert('Success!', alert);
    this.router.navigate(['/search']);
  }
}
