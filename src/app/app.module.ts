import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { StockSelectorComponent } from './stock-selector/stock-selector.component';


@NgModule({
  declarations: [
    AppComponent,
    StockSelectorComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
