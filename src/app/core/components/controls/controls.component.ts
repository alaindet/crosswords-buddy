import { Component } from '@angular/core';

import { UiService } from 'src/app/core/services/ui.service';
import { CluesService } from 'src/app/core/services/clues.service';
import { Direction } from 'src/app/core/models/direction.enum';

@Component({
  selector: 'app-controls',
  templateUrl: './controls.component.html',
  styleUrls: ['./controls.component.scss']
})
export class ControlsComponent {

  Direction = Direction;

  constructor(
    public ui: UiService,
    private cluesService: CluesService,
  ) {}

  onFilterClick(dir: Direction) {
    this.cluesService.setDirection(dir);
  }

  onButtonClick(index: number) {
    console.log('onButtonClick', index);
  }

  onCancel() {
    console.log('onCancel');
  }

  onConfirm() {
    console.log('onConfirm');
  }

  onControlsCollapse() {
    this.ui.toggleControls();
  }
}
