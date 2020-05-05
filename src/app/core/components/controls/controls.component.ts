import { Component } from '@angular/core';

@Component({
  selector: 'app-controls',
  templateUrl: './controls.component.html',
  styleUrls: ['./controls.component.scss']
})
export class ControlsComponent {

  onButtonClick(index: number) {
    console.log('onButtonClick', index);
  }

  onCancel() {
    console.log('onCancel');
  }

  onConfirm() {
    console.log('onConfirm');
  }
}
