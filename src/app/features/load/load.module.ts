import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SharedModule } from 'src/app/shared/shared.module';
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
    SharedModule,
    RouterModule.forChild(routes),
  ]
})
export class LoadModule {}
