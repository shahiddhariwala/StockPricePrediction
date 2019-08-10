import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule,Routes } from '@angular/router';
import {InputComponent} from './input/input.component';
import {StockSelectorComponent} from './stock-selector/stock-selector.component';
const routes : Routes =[
  {path:'',component : InputComponent},
  {path:'seeStock',component: StockSelectorComponent}
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  declarations: [],
  exports:[RouterModule]
})
export class AppRoutingModule { }
