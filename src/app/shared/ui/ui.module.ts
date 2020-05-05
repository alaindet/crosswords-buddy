import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ButtonComponent } from './components/button/button.component';
import { IconChevronComponent } from './components/icon-chevron/icon-chevron.component';

const components = [
  ButtonComponent,
  IconChevronComponent,
];

@NgModule({
  declarations: [...components],
  imports: [
    CommonModule,
  ],
  exports: [...components],
})
export class UiModule {}
