import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { PortalLoginComponent } from './portal-login/portal-login.component';

@NgModule({
  declarations: [
    AppComponent,
    PortalLoginComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
