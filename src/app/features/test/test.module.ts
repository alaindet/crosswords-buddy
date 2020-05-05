import { NgModule } from '@angular/core';

import { SharedModule } from 'src/app/shared/shared.module';
import { TestsRoutingModule } from './test-routing.module';
import { TestsPageComponent } from './pages/tests/tests.component';
import { TestButtonsComponent } from './pages/buttons/buttons.component';
import { TestAlertsComponent } from './pages/alerts/alerts.component';
import { TestListsComponent } from './pages/lists/lists.component';

@NgModule({
  declarations: [
    TestsPageComponent,
    TestButtonsComponent,
    TestAlertsComponent,
    TestListsComponent,
  ],
  imports: [
    SharedModule,
    TestsRoutingModule,
  ],
})
export class TestModule {}
