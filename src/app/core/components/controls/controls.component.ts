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
export class ControlsComponent implements OnInit, OnDestroy {

  Direction = Direction;
  isSearchPage = false;
  query = 0;

  private subs: { [name: string]: Subscription } = {};

  constructor(
    public ui: UiService,
    private searchService: CluesSearchService
  ) {}

  ngOnInit() {
    this.subs.url = this.ui.url.subscribe(
      url => this.isSearchPage = url === '/search'
    );
  }

  ngOnDestroy() {
    for (const sub of Object.values(this.subs)) {
      sub.unsubscribe();
    }
  }

  onFilterClick(dir: Direction) {
    this.searchService.setDirection(dir);
    if (this.isSearchPage) {
      this.searchService.search();
    }
  }

  onButtonClick(index: number) {
    if (!this.isSearchPage) {
      return;
    }
    this.searchService.addToSearchQuery(index);
    this.searchService.search();
  }

  onCancel() {
    if (!this.isSearchPage) {
      return;
    }
    this.searchService.removeFromSearchQuery();
    this.searchService.search();
  }

  onConfirm() {
    if (!this.isSearchPage) {
      return;
    }
    this.searchService.search();
  }

  onControlsCollapse() {
    this.ui.toggleControls();
  }
}
