import { Component, ChangeDetectionStrategy, Input, OnInit } from '@angular/core';

import { HasBooleanInputs } from 'src/app/core/models/has-boolean-inputs';

@Component({
  selector: 'ui-icon-chevron',
  templateUrl: './icon-chevron.component.html',
  styleUrls: ['./icon-chevron.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class IconChevronComponent extends HasBooleanInputs implements OnInit {

  @Input() color: string;
  @Input() up: string | boolean;
  @Input() right: string | boolean;
  @Input() down: string | boolean;
  @Input() left: string | boolean;

  ngOnInit() {
    this.booleanInputs(['up', 'right', 'down', 'left']);
  }
}
