import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SharedModule } from 'src/app/shared/shared.module';
import { DefinitionsShowPageComponent } from './pages/show/show.component';

const routes: Routes = [
  {
    path: ':id',
    component: DefinitionsShowPageComponent,
  }
];

@NgModule({
  declarations: [
    DefinitionsShowPageComponent,
  ],
  imports: [
    SharedModule,
    RouterModule.forChild(routes),
  ]
})
export class DefinitionsModule {}
