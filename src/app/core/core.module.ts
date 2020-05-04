import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedModule } from 'src/app/shared/shared.module';
import { NotFoundPageComponent } from './pages/not-found/not-found.component';

@NgModule({
  declarations: [
    NotFoundPageComponent,
  ],
  imports: [
    CommonModule,
    SharedModule,
  ],
  exports: [
    SharedModule,
    NotFoundPageComponent,
  ]
})
export class CoreModule {}
