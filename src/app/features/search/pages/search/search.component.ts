import { Component, ChangeDetectionStrategy, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';

import { Clue } from 'src/app/core/models/clue.interface';
import { CluesMap } from 'src/app/core/models/clues-map.interface';
import { Dir } from 'src/app/core/models/direction.enum';
import { ModalConfig } from 'src/app/shared/ui/components/modal/modal.interface';
import { UiService } from 'src/app/core/services/ui.service';
import { AlertsService } from 'src/app/core/services/alerts.service';
import { CluesService } from 'src/app/core/services/clues.service';

@Component({
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SearchPageComponent implements OnInit, OnDestroy {

  modal: ModalConfig;
  Dir = Dir;

  private subs: { [name: string]: Subscription } = {};

  constructor(
    public ui: UiService,
    private alertsService: AlertsService,
    private cluesService: CluesService,
    private route: ActivatedRoute,
    private router: Router,
  ) {}

  ngOnInit() {
    this.ui.isLoading();
    this.ui.setTitle(this.route.snapshot.data.title);
    this.ui.isLoading();
    this.cluesService.clues.subscribe(this.initClues.bind(this));
  }

  ngOnDestroy() {
    for (const sub of Object.values(this.subs)) {
      sub.unsubscribe();
    }
  }

  onResultSelect(clue: Clue) {
    this.cluesService.addRecentClue(clue);
    this.modal = {
      show: true,
      title: `#${clue.id} ${clue.direction}`,
      confirm: 'Ok',
      context: {
        text: clue.clue,
      }
    };
  }

  private initClues(clues: CluesMap | null) {
    this.checkClues(clues);
    this.ui.hasLoaded();
  }

  private checkClues(clues: CluesMap | null) {
    if (!clues) {
      const message = 'You must load a clues\' database first';
      this.alertsService.setInfoAlert('Info', message);
      this.router.navigate(['/settings']);
    }
  }
}
