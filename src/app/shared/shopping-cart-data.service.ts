import { EventEmitter, Injectable, Output } from '@angular/core';
import { Ingredient } from "./ingredient.model";
import { Subject } from 'rxjs';

@Injectable({
    providedIn: 'root'
  })
export class ShoppingCartDataService{
    ingredient : Ingredient[] = [];

    @Output() itemClick = new Subject<Ingredient>();
    @Output() addToCart = new Subject<Ingredient[]>();


    addIngrediant(item: Ingredient){
        this.ingredient.push(item);
    }
}