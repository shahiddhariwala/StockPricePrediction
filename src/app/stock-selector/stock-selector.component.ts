import { Component, OnInit } from '@angular/core';
import { StockClass } from "../stock-structure";
@Component({
  selector: 'app-stock-selector',
  templateUrl: './stock-selector.component.html',
  styleUrls: ['./stock-selector.component.css']
})
export class StockSelectorComponent implements OnInit {
private StockOne : StockClass = 
{
  stockName : "Facebook",
    stockInit : "FB",
    stockPrices : [10,10,10],
    stockColor : "#01010"

};
  constructor() { }

  ngOnInit() {
  }

}
