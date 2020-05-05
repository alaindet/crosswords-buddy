import { Component, ChangeDetectionStrategy, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { AlertsService } from 'src/app/core/services/alerts.service';
import { DefinitionsService } from 'src/app/core/services/definitions.service';
import { UiService } from 'src/app/core/services/ui.service';
import DEMO from 'src/app/core/data/demo.const';

@Component({
  templateUrl: './load.component.html',
  styleUrls: ['./load.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class LoadPageComponent implements OnInit {

  constructor(
    private ui: UiService,
    private alertsService: AlertsService,
    private definitionsService: DefinitionsService,
    private route: ActivatedRoute,
    private router: Router,
  ) {}

  ngOnInit() {
    this.ui.setTitle(this.route.snapshot.data.title);
  }

  onSaveData() {
    console.log('onSaveData');
  }

  onLoadDemoData() {
    this.definitionsService.setDefinitions(DEMO);
    this.alertsService.setSuccessAlert(
      'Success!',
      'You loaded the demo data',
    );
    this.router.navigate(['/']);
  }
}
