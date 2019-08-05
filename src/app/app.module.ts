import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
// import { MyInterceptor } from '/my-interceptor';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
    // ,MyInterceptor
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
