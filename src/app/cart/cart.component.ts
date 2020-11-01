import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { BeerCartService } from '../beer-cart.service';
import { Beer } from '../beer-list/Beer';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {

  cartList$: Observable<Beer[]>;
  total$: Observable<number>;

  constructor(private cart: BeerCartService) {
    this.cartList$ = cart.cartList.asObservable();
    this.total$ = cart.total.asObservable();
  }  

  ngOnInit(): void {
  }

  finalizarCompra(){
    alert('¡Muchas gracias por su compra!');
  }


}
