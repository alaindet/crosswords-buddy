import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';

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
    ReactiveFormsModule,
    RouterModule.forChild(routes),
  ]
})
export class SettingsModule {}
