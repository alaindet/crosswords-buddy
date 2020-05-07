import { Component, ViewChild, TemplateRef } from '@angular/core';

import { ModalConfig } from 'src/app/shared/ui/components/modal/modal.interface';

@Component({
  templateUrl: './modals.component.html',
  styleUrls: ['./modals.component.scss']
})
export class TestModalsComponent {

  @ViewChild('modalContent', { static: true, read: TemplateRef })
  modalContent: TemplateRef<{ name: string }>;

  modal: ModalConfig;

  onShowModal() {
    this.modal = {
      show: true,
      title: 'Hello there',
      confirm: 'Nice to meet you',
      template: this.modalContent,
      context: {
        name: 'Flinch',
      }
    };
  }

  onModalDimiss() {
    this.modal = null;
    console.log('You dismissed the modal');
  }

  onModalConfirm() {
    this.modal = null;
    console.log('You confirmed the modal');
  }
}
