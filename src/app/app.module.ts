import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { StockSelectorComponent } from './stock-selector/stock-selector.component';
import { InputComponent } from './input/input.component';


@NgModule({
  declarations: [
    AppComponent,
    StockSelectorComponent,
    InputComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
