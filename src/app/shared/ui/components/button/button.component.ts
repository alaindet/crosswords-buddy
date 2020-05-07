import { Component, ChangeDetectionStrategy, Input, OnInit } from '@angular/core';

import { HasBooleanInputs } from 'src/app/core/models/has-boolean-inputs';

type ColorInput = (
  'primary' |
  'secondary' |
  'outline-primary' |
  'outline-secondary'
);

@Component({
  selector: 'ui-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ButtonComponent extends HasBooleanInputs implements OnInit {

  @Input() size: 'small' | 'medium' | 'large' = 'medium';
  @Input() type: 'submit' | 'button' = 'button';
  @Input() color: ColorInput = 'outline-secondary';
  @Input() disabled = false;
  @Input() noMargin: string | boolean;
  @Input() isFullWidth: string | boolean;
  @Input() isActive: string | boolean;

  ngOnInit() {
    this.booleanInputs(['noMargin', 'isFullWidth', 'isActive']);
  }
}
