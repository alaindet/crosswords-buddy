import { Component, ChangeDetectionStrategy, Input, Output, EventEmitter, HostListener } from '@angular/core';

import { AlertType } from './alert.interface';

@Component({
  selector: 'ui-alert',
  templateUrl: './alert.component.html',
  styleUrls: ['./alert.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AlertComponent {

  AlertType = AlertType;

  @Input() title: string;
  @Input() message: string | null = null;
  @Input() type: AlertType = AlertType.Success;

  @Output() dismissed = new EventEmitter<boolean>();
  @Output() mouseEntered = new EventEmitter<boolean>();
  @Output() mouseLeft = new EventEmitter<boolean>();

  onDismiss() {
    this.dismissed.emit(true);
  }
}
