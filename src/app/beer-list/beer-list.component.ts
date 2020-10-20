import { Component, OnInit } from '@angular/core';
import { Beer } from './Beer';

@Component({
  selector: 'app-beer-list',
  templateUrl: './beer-list.component.html',
  styleUrls: ['./beer-list.component.scss']
})
export class BeerListComponent implements OnInit {

  beers: Beer[] = [
    {
      name: 'Bitter Call Saul',
      type: 'IPA',
      price: 180,
      stock: 5,
      image: 'assets/img/porter.jpg',
      clearance: false,
      quantity: 0,
    },
    {
      name: 'Red Red Wine',
      type: 'Barley Wine',
      price: 200,
      stock: 3,
      image: 'assets/img/porter.jpg',
      clearance: true,
      quantity: 0,
    },
    {
      name: 'Yellow Submarine',
      type: 'Golden Ale',
      price: 180,
      stock: 0,
      image: 'assets/img/porter.jpg',
      clearance: false,
      quantity: 0,
    },
    {
      name: 'Yellow Submarine 2',
      type: 'Golden Ale',
      price: 180,
      stock: 0,
      image: 'assets/img/porter.jpg',
      clearance: false,
      quantity: 0,
    },
  ];


  constructor() { }

  ngOnInit(): void {
  }


  upQuantity(beer: Beer): void {
    if (beer.quantity < beer.stock)
    beer.quantity ++;
  }

  downQuantity(beer: Beer): void {
    if (beer.quantity > 0)
      beer.quantity --;
  }

  changeQuantity(event, beer: Beer): void {
    //console.log(event.key);
    let isNumber = isFinite(event.key);
    if (isNumber)
      beer.quantity = event.key;

    //if (0 < event.key && event.key <= beer.stock)
      //beer.quantity = event.key;
  }


}
