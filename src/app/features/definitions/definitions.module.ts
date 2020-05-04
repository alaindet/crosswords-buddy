import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';

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
    CommonModule,
    RouterModule.forChild(routes),
  ]
})
export class DefinitionsModule {}
