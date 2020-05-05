import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ButtonComponent } from './components/button/button.component';
import { IconChevronComponent } from './components/icon-chevron/icon-chevron.component';
import { FormFileUploadComponent } from './components/form/file-upload/file-upload.component';
import { AlertComponent } from './components/alert/alert.component';

const components = [
  ButtonComponent,
  IconChevronComponent,
  FormFileUploadComponent,
  AlertComponent,
];

@NgModule({
  declarations: [...components],
  imports: [
    CommonModule,
  ],
  exports: [...components],
})
export class UiModule {}
