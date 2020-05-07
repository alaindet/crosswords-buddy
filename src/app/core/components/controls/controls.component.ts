import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';

import { Direction } from 'src/app/core/models/direction.enum';
import { UiService } from 'src/app/core/services/ui.service';
import { CluesSearchService } from 'src/app/core/services/clues-search.service';

@Component({
  selector: 'app-controls',
  templateUrl: './controls.component.html',
  styleUrls: ['./controls.component.scss']
})
export class ControlsComponent {

  Direction = Direction;
  query = 0;

  constructor(
    public ui: UiService,
    private searchService: CluesSearchService
  ) {}

  onFilterClick(dir: Direction) {
    this.searchService.setDirection(dir);
    this.searchService.search();
  }

  onButtonClick(index: number) {
    this.searchService.addToSearchQuery(index);
    this.searchService.search();
  }

  onCancelOne() {
    this.searchService.removeFromSearchQuery();
    this.searchService.search();
  }

  onCancelAll() {
    this.searchService.clearSearchQuery();
    this.searchService.search();
  }

  onControlsCollapse() {
    this.ui.toggleControls();
  }
}
