import { environment } from 'src/environments/environment';
import { NgModule } from '@angular/core';
import { Routes, RouterModule, ExtraOptions } from '@angular/router';

import { NotFoundPageComponent } from 'src/app/core/pages/not-found/not-found.component';

const DEFAULT_ROUTE = '/recent';

let routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: DEFAULT_ROUTE,
  },
  {
    path: 'recent',
    loadChildren: () => import('./features/recent/recent.module')
      .then(m => m.RecentModule),
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
  },
  {
    path: 'load',
    loadChildren: () => import('./features/load/load.module')
      .then(m => m.LoadModule),
  },
  {
    path: '**',
    component: NotFoundPageComponent,
  }
];

// Add test routes on development
if (!environment.production) {
  routes = [
    {
      path: 'tests',
      loadChildren: () => import('./features/tests/tests.module')
        .then(m => m.TestsModule),
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
