import { Component, OnInit } from '@angular/core';
import { StockClass } from "../stock-structure";
import { STOCKS } from "../stock-data";
@Component({
  selector: 'app-stock-selector',
  templateUrl: './stock-selector.component.html',
  styleUrls: ['./stock-selector.component.css']
})
export class StockSelectorComponent implements OnInit {
  
  private stocks : StockClass[] = STOCKS;

  constructor() { }

  ngOnInit() {
  }

}
