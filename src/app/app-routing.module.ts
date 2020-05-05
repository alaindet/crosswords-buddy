import { environment } from 'src/environments/environment';
import { NgModule } from '@angular/core';
import { Routes, RouterModule, ExtraOptions } from '@angular/router';

import { NotFoundPageComponent } from 'src/app/core/pages/not-found/not-found.component';

const DEFAULT_ROUTE = '/search';

let routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: DEFAULT_ROUTE,
  },
  {
    path: 'definitions',
    loadChildren: () => import('./features/definitions/definitions.module')
      .then(m => m.DefinitionsModule),
  },
  {
    path: 'search',
    loadChildren: () => import('./features/search/search.module')
      .then(m => m.SearchModule),
    data: { title: 'Search' },
  },
  {
    path: 'load',
    loadChildren: () => import('./features/load/load.module')
      .then(m => m.LoadModule),
    data: { title: 'Load' },
  },
  {
    path: '**',
    component: NotFoundPageComponent,
    data: { title: '404' },
  }
];

// Add test routes on development
if (!environment.production) {
  routes = [
    {
      path: 'test',
      loadChildren: () => import('./features/test/test.module')
        .then(m => m.TestModule),
      data: { title: 'Test' },
    },
    ...routes
  ];
}

const routerOptions: ExtraOptions = {
  // https://angular.io/api/router/ExtraOptions
  // Enter extra options here...
};

@NgModule({
  imports: [RouterModule.forRoot(routes, routerOptions)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
