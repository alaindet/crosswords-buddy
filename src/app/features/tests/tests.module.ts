import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TestsPageComponent } from './pages/tests/tests.component';

@NgModule({
  declarations: [
    TestsPageComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    TestsPageComponent,
  ]
})
export class TestsModule {}
