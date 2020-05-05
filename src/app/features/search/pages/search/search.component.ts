import { Component, ChangeDetectionStrategy, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { DefinitionsMap } from 'src/app/core/models/definitions-map.interface';
import { UiService } from 'src/app/core/services/ui.service';
import { AlertsService } from 'src/app/core/services/alerts.service';
import { DefinitionsService } from 'src/app/core/services/definitions.service';

@Component({
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SearchPageComponent implements OnInit {

  constructor(
    private ui: UiService,
    private alertsService: AlertsService,
    private definitionsService: DefinitionsService,
    private route: ActivatedRoute,
    private router: Router,
  ) {}

  ngOnInit() {
    this.ui.setTitle(this.route.snapshot.data.title);
    this.ui.isLoading();
    this.definitionsService.definitions.subscribe(
      this.checkDefinitions.bind(this)
    );
  }

  private checkDefinitions(def: DefinitionsMap | null) {
    if (!def) {
      const message = 'You must load some data first';
      this.alertsService.setInfoAlert('Info', message);
      this.router.navigate(['/settings']);
    }
  }
}
