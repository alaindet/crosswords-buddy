import { Component, ChangeDetectionStrategy, Input } from '@angular/core';

@Component({
  selector: 'ui-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ButtonComponent {

  @Input() size: 'small' | 'medium' | 'large' = 'medium';
  @Input() type: 'submit' | 'button' = 'button';
  @Input() disabled = false;
}
