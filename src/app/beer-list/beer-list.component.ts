import { Component, OnInit } from '@angular/core';
import { BeerCartService } from '../beer-cart.service';
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
      image: 'https://cdn.jsdelivr.net/gh/GiancarloCristiano/angular-brewery@master/src/assets/img/porter.jpg',
      clearance: false,
      quantity: 0,
    },
    {
      name: 'Wine Not?',
      type: 'Barley Wine',
      price: 200,
      stock: 13,
      image: 'https://cdn.jsdelivr.net/gh/GiancarloCristiano/angular-brewery@master/src/assets/img/porter.jpg',
      clearance: true,
      quantity: 0,
    },
    {
      name: 'Yellow Submarine',
      type: 'Golden Ale',
      price: 180,
      stock: 0,
      image: 'https://cdn.jsdelivr.net/gh/GiancarloCristiano/angular-brewery@master/src/assets/img/porter.jpg',
      clearance: false,
      quantity: 0,
    },
    {
      name: 'Black Mirror',
      type: 'Porter',
      price: 250,
      stock: 15,
      image: 'https://cdn.jsdelivr.net/gh/GiancarloCristiano/angular-brewery@master/src/assets/img/porter.jpg',
      clearance: false,
      quantity: 0,
    },
    {
      name: 'Redemption',
      type: 'Amber Ale',
      price: 150,
      stock: 0,
      image: 'https://cdn.jsdelivr.net/gh/GiancarloCristiano/angular-brewery@master/src/assets/img/porter.jpg',
      clearance: true,
      quantity: 0,
    },
    {
      name: 'Scream',
      type: 'Cream Stout',
      price: 250,
      stock: 10,
      image: 'https://cdn.jsdelivr.net/gh/GiancarloCristiano/angular-brewery@master/src/assets/img/porter.jpg',
      clearance: false,
      quantity: 0,
    },
    {
      name: 'Dry or Wheat?',
      type: 'Wheat',
      price: 200,
      stock: 20,
      image: 'https://cdn.jsdelivr.net/gh/GiancarloCristiano/angular-brewery@master/src/assets/img/porter.jpg',
      clearance: false,
      quantity: 0,
    },
    {
      name: 'Beerality',
      type: 'Amber Ale',
      price: 180,
      stock: 0,
      image: 'https://cdn.jsdelivr.net/gh/GiancarloCristiano/angular-brewery@master/src/assets/img/porter.jpg',
      clearance: false,
      quantity: 0,
    },
  ];


  constructor(private cart: BeerCartService) { 
  }

  ngOnInit(): void {
  }

  addToCart(beer): void{
    
    this.cart.addToCart(beer);
    beer.stock -= beer.quantity;
    beer.quantity = 0;
  }

  maxReached(m: string){
    alert(m);
  }

}
