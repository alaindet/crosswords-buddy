import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TestsPageComponent } from './pages/tests/tests.component';
import { TestAlertsComponent } from './pages/alerts/alerts.component';
import { TestButtonsComponent } from './pages/buttons/buttons.component';
import { TestListsComponent } from './pages/lists/lists.component';

const routes: Routes = [
  {
    path: '',
    component: TestsPageComponent,
    data: { title: 'Tests' },
  },
  {
    path: 'alerts',
    component: TestAlertsComponent,
    data: { title: 'Test alerts' },
  },
  {
    path: 'buttons',
    component: TestButtonsComponent,
    data: { title: 'Test buttons' },
  },
  {
    path: 'lists',
    component: TestListsComponent,
    data: { title: 'Test lists' },
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TestsRoutingModule {}
