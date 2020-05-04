import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';

import { RecentPageComponent } from './pages/recent/recent.component';

const routes: Routes = [
  {
    path: '',
    component: RecentPageComponent,
  }
];


@NgModule({
  declarations: [
    RecentPageComponent,
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
  ]
})
export class RecentModule {}
