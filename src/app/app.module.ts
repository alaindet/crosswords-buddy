import { environment } from 'src/environments/environment';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from 'src/app/app-routing.module';
import { AppComponent } from 'src/app/app.component';
import { CoreModule } from 'src/app/core/core.module';
import { TestsModule } from 'src/app/features/tests/tests.module';

@NgModule({
  imports: [
    BrowserModule,
    AppRoutingModule,
    CoreModule,
    (!environment.production ? TestsModule : []),
  ],
  declarations: [AppComponent],
  bootstrap: [AppComponent]
})
export class AppModule {}
