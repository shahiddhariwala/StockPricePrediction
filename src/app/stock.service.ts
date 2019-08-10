import { Injectable } from '@angular/core';
import { StockClass } from "./stock-structure";
import { STOCKS } from "./stock-data";
@Injectable()
export class StockService {
  private stocks : StockClass[] = STOCKS;
  getStock(stockName : string): StockClass
  {
    for (let index = 0; index < this.stocks.length; index++) {
     if(this.stocks[index].stockName==stockName)
      return this.stocks[index];
      
    }
    
  }

  constructor() { }

}
