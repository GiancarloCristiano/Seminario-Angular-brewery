import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-beer-cart',
  templateUrl: './beer-cart.component.html',
  styleUrls: ['./beer-cart.component.scss']
})
export class BeerCartComponent implements OnInit {

  beer = {
    "name": "Negra Juerte",
    "price": 100,
  }

  constructor() { }

  ngOnInit(): void {
  }

}
