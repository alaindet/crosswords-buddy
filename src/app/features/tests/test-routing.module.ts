import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TestsPageComponent } from './pages/tests/tests.component';
import { TestButtonsComponent } from './pages/buttons/buttons.component';

const routes: Routes = [
  {
    path: '',
    component: TestsPageComponent,
  },
  {
    path: 'buttons',
    component: TestButtonsComponent,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TestsRoutingModule {}
