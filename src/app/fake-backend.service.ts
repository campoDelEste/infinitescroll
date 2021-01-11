import { Injectable } from '@angular/core';
import { Item } from './item';
import * as data from './products.json';

@Injectable({
  providedIn: 'root'
})
export class FakeBackendService {

  BATCH_SIZE = 4;
  items: Item[] = [];
  lastAddedIndex: number = -1;

  async getItems() {
    let newItems: Item[] = [];
    for (let i = 0; i < this.BATCH_SIZE; i++) {
      newItems.push(this._getItem())
    }
    await this._delay(); // faking a server call's asynchronous manner with up to 3 seconds
    this.items.splice(this.items.length, 0, ...newItems);
    return this.items;
  }

  private _getItem() {
    let complexItem = data.products[this.lastAddedIndex + 1]
    let ret = {
      bankDetails: complexItem.bank,
      characteristics: complexItem.bullets,
      instalment: complexItem.rates.effective.min.monthlyRate,
      minInterest: complexItem.rates.effective.min.interest
    }
    this.lastAddedIndex++;
    return ret;
  }

  // faking asynchrony 
  private _delay() {
    return new Promise(function (resolve, reject) {
      setTimeout(function () {
        resolve(true);
      }, 3000 * Math.random());
    });
  }

  constructor() {
  }
}
