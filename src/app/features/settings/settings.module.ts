import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SharedModule } from 'src/app/shared/shared.module';
import { SettingsPageComponent } from './pages/settings/settings.component';

const routes: Routes = [
  {
    path: '',
    component: SettingsPageComponent,
  }
];

@NgModule({
  declarations: [
    SettingsPageComponent,
  ],
  imports: [
    SharedModule,
    RouterModule.forChild(routes),
  ]
})
export class SettingsModule {}
