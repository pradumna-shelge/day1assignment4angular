import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LearninPageComponent } from './learnin-page/learnin-page.component';
import { toup } from './pipe';

@NgModule({
  declarations: [
    AppComponent,
    LearninPageComponent,
    toup
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
