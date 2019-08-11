import { Component, OnInit } from '@angular/core';
import {StockService } from "../stock.service";
import { StockClass } from "../stock-structure";
@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.css']
})
export class InputComponent implements OnInit {

  private stock : StockClass;
  getStocky(stockName : string): StockClass
  {
    this.stock = this.stockservice.getStock(stockName);
    return this.stock;
  }

  constructor(private stockservice:StockService) {
    
   }
  
  ngOnInit() {

  }

}
