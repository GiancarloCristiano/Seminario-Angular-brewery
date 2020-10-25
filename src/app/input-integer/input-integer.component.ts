import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Beer } from '../beer-list/Beer';
import { BreweryBeersComponent } from '../brewery-beers/brewery-beers.component';

@Component({
  selector: 'app-input-integer',
  templateUrl: './input-integer.component.html',
  styleUrls: ['./input-integer.component.scss']
})
export class InputIntegerComponent implements OnInit {

  constructor() { }

  @Input()
  quantity: number;

  @Input()
  max: number;

  @Output()
  quantityChange: EventEmitter<number> = new EventEmitter<number>();

  @Output()
  maxReached: EventEmitter<string> = new EventEmitter<string>();


  ngOnInit(): void {
  }


  
  upQuantity(): void {
    if (this.quantity < this.max){
      this.quantity ++;
      this.quantityChange.emit(this.quantity);
    }
    else
      this.maxReached.emit("Se alcanzó el máximo.");
  }

  downQuantity(): void {
    if (this.quantity > 0)
      this.quantity --;
      this.quantityChange.emit(this.quantity);
  }

  changeQuantity(event): void {
    //console.log(event.key);
    /*let isNumber = isFinite(event.key);
    if (isNumber)
      beer.quantity = event.key;*/
    //if (0 < event.key && event.key <= beer.stock)
      //beer.quantity = event.key;
      if (event.target.value % 1!=0){
        event.target.value=parseInt(event.target.value, 10);
        this.quantity = event.target.value;
        this.quantityChange.emit();
      }
      if (event.target.value){
        event.target.value = event.target.value - 0;
        this.quantityChange.emit(event.target.value);
      }
      if (event.target.value < 0) {
        event.target.value = event.target.value * (-1);
        this.quantity = event.target.value;
        this.quantityChange.emit(this.quantity);
      }
      if (event.target.value > this.max){
        this.quantity = this.max;
        this.quantityChange.emit(this.quantity);
      }
  }

}
