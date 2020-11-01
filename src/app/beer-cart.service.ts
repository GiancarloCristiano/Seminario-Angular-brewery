import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Beer } from './beer-list/Beer';


/**
 * Maneja la lógica del carrito
 */

@Injectable({
  providedIn: 'root'
})
export class BeerCartService {

  private _cartList: Beer [] = [];
  _total = 0;

  cartList: BehaviorSubject<Beer[]> = new BehaviorSubject([]);
  total: BehaviorSubject<number> = new BehaviorSubject(this._total);

  constructor() { }
  
  addToCart(beer: Beer) {
    let item: Beer = this._cartList.find((v1) => v1.name == beer.name);
    if (!item){
      this._cartList.push({ ...beer});
    } else{
      item.quantity += beer.quantity;
    }
    console.log(this._cartList);  
    this._cartList.forEach(beer => {
      this._total += (beer.price * beer.quantity);
    });

    this.cartList.next(this._cartList); //equivale al emit de eventos.
    this.total.next(this._total);
  }


}
