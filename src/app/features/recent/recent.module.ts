import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SharedModule } from 'src/app/shared/shared.module';
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
    SharedModule,
    RouterModule.forChild(routes),
  ]
})
export class RecentModule {}
