import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DataBindingComponent } from './data-binding/data-binding.component';
import { ClasseStyleBindingComponent } from './data-binding/classe-style-binding/classe-style-binding.component';

@NgModule({
  declarations: [
    AppComponent,
    DataBindingComponent,
    ClasseStyleBindingComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
