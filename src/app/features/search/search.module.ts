import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';

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
    CommonModule,
    RouterModule.forChild(routes),
  ]
})
export class SearchModule {}
