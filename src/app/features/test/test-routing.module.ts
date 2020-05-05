import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TestsPageComponent } from './pages/tests/tests.component';
import { TestButtonsComponent } from './pages/buttons/buttons.component';
import { TestAlertsComponent } from './pages/alerts/alerts.component';

const routes: Routes = [
  {
    path: '',
    component: TestsPageComponent,
    data: { title: 'Tests' },
  },
  {
    path: 'buttons',
    component: TestButtonsComponent,
    data: { title: 'Test buttons' },
  },
  {
    path: 'alerts',
    component: TestAlertsComponent,
    data: { title: 'Test alerts' },
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TestsRoutingModule {}
