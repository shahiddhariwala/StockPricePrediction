import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule,Routes } from '@angular/router';
import {InputComponent} from './input/input.component';
import {StockSelectorComponent} from './stock-selector/stock-selector.component';
const routes : Routes =[
  {path:'searchStock',component : InputComponent},
  {path:'',component: StockSelectorComponent}
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  declarations: [],
  exports:[RouterModule]
})
export class AppRoutingModule { }
