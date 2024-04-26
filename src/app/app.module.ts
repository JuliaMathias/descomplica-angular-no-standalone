import { NgModule } from '@angular/core';
import {
  BrowserModule,
  provideClientHydration,
} from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PaiPageComponent } from './pages/pai.component';
import { Filho1PageComponent } from './pages/filho1.component';
import { Filho2PageComponent } from './pages/filho2.component';

@NgModule({
  declarations: [
    AppComponent,
    PaiPageComponent,
    Filho1PageComponent,
    Filho2PageComponent,
  ],
  imports: [BrowserModule, AppRoutingModule],
  providers: [provideClientHydration()],
  bootstrap: [AppComponent],
})
export class AppModule {}
