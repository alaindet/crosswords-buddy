import { Component, ChangeDetectionStrategy, Input, OnInit } from '@angular/core';

@Component({
  selector: 'ui-icon-chevron',
  templateUrl: './icon-chevron.component.html',
  styleUrls: ['./icon-chevron.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class IconChevronComponent implements OnInit {

  @Input() up: string | boolean;
  @Input() right: string | boolean;
  @Input() down: string | boolean;
  @Input() left: string | boolean;
  @Input() color: string;

  ngOnInit() {
    this.processBooleanInputs([
      'up',
      'right',
      'down',
      'left',
    ]);

    console.log('up', this.up);
    console.log('right', this.right);
    console.log('down', this.down);
    console.log('left', this.left);
  }

  // TODO: Abstract away
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
