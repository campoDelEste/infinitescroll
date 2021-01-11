import { Component, Input, OnInit } from '@angular/core';
import { Item } from 'src/app/item';

@Component({
  selector: 'app-instalment',
  templateUrl: './instalment.component.html',
  styleUrls: ['./instalment.component.scss']
})
export class InstalmentComponent implements OnInit {

  @Input() product: Item;
  constructor() { }

  ngOnInit(): void {
  }

}
