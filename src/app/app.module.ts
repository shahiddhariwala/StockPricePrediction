import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { StockSelectorComponent } from './stock-selector/stock-selector.component';
import { InputComponent } from './input/input.component';
import { StockService } from './stock.service';
import { AppRoutingModule } from './/app-routing.module';


@NgModule({
  declarations: [
    AppComponent,
    StockSelectorComponent,
    InputComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [ StockService],
  bootstrap: [AppComponent]
})
export class AppModule { }
