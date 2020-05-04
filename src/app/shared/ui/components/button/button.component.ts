import { Component, ChangeDetectionStrategy, Input, OnInit } from '@angular/core';

@Component({
  selector: 'ui-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ButtonComponent implements OnInit {

  @Input() size: 'small' | 'medium' | 'large' = 'medium';
  @Input() type: 'submit' | 'button' = 'button';
  @Input() color: 'secondary' | 'primary' = 'secondary';
  @Input() disabled = false;
  @Input() noMargin: string | boolean;
  @Input() isFullWidth: string | boolean;

  ngOnInit() {
    this.processBooleanInputs([
      'noMargin',
      'isFullWidth',
    ]);
  }

  private processBooleanInputs(keys: string[]): void {
    for (const key of keys) {

      // All missing keys are false
      if (!this.hasOwnProperty(key)) {
        this[key] = false;
      }

      // All strings, including '', are true. Boolean already work on their own
      if (typeof this[key] === 'string') {
        this[key] = this[key] || this[key] === '';
      }
    }
  }
}
