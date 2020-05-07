import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'ui-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss']
})
export class ModalComponent {

  @Input() showIf = true;
  @Input() title: string;
  @Input() confirm: string = 'Ok';

  @Output() dismissed = new EventEmitter<boolean>();
  @Output() confirmed = new EventEmitter<boolean>();

  onDismiss() {
    this.dismissed.emit(true);
  }

  onConfirm() {
    this.confirmed.emit(true);
  }

  doNotDismiss(event: Event) {
    event.stopPropagation();
  }
}
