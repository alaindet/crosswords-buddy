import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedModule } from 'src/app/shared/shared.module';
import { NotFoundPageComponent } from './pages/not-found/not-found.component';
import { HeaderComponent } from './components/header/header.component';
import { ControlsComponent } from './components/controls/controls.component';
import { SideMenuComponent } from './components/side-menu/side-menu.component';

@NgModule({
  declarations: [
    NotFoundPageComponent,
    HeaderComponent,
    ControlsComponent,
    SideMenuComponent,
  ],
  imports: [
    CommonModule,
    SharedModule,
  ],
  exports: [
    SharedModule,
    NotFoundPageComponent,
    HeaderComponent,
    ControlsComponent,
    SideMenuComponent,
  ]
})
export class CoreModule {}
