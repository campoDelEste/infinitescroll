import { Component, Input, OnInit } from '@angular/core';
import { Item } from 'src/app/item';

@Component({
  selector: 'app-bank',
  templateUrl: './bank.component.html',
  styleUrls: ['./bank.component.scss']
})
export class BankComponent implements OnInit {

  @Input() product: Item;
  constructor() { }
  class: string;

  ngOnInit(): void {
    this.class = 'b' + this.product.bankDetails.id.toString();
  }

}
