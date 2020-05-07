import { ChangeDetectionStrategy, Component, Input, Output, EventEmitter, OnChanges } from '@angular/core';

import { Dir } from 'src/app/core/models/direction.enum';
import { Clue } from 'src/app/core/models/clue.interface';

@Component({
  selector: 'app-search-results',
  templateUrl: './search-results.component.html',
  styleUrls: ['./search-results.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SearchResultsComponent implements OnChanges {

  @Input() results: Clue[];
  @Output() selected = new EventEmitter<Clue>();

  ngOnChanges() {
    this.results = this.results.map((result: Clue) => {
      result.dir = Dir[result.direction];
      return result;
    });
  }

  onResultSelect(clue: Clue) {
    this.selected.emit(clue);
  }
}
