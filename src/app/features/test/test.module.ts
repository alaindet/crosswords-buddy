import { NgModule } from '@angular/core';

import { SharedModule } from 'src/app/shared/shared.module';
import { TestsRoutingModule } from './test-routing.module';
import { TestsPageComponent } from './pages/tests/tests.component';
import { TestButtonsComponent } from './pages/buttons/buttons.component';

@NgModule({
  declarations: [
    TestsPageComponent,
    TestButtonsComponent
  ],
  imports: [
    SharedModule,
    TestsRoutingModule,
  ],
})
export class TestModule {}
