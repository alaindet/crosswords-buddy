import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';

import { LoadPageComponent } from './pages/load/load.component';

const routes: Routes = [
  {
    path: '',
    component: LoadPageComponent,
  }
];

@NgModule({
  declarations: [
    LoadPageComponent,
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
  ]
})
export class LoadModule {}
