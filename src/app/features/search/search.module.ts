import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SharedModule } from 'src/app/shared/shared.module';
import { SearchPageComponent } from './pages/search/search.component';

const routes: Routes = [
  {
    path: '',
    component: SearchPageComponent,
  }
];

@NgModule({
  declarations: [
    SearchPageComponent,
  ],
  imports: [
    SharedModule,
    RouterModule.forChild(routes),
  ]
})
export class SearchModule {}
