import { Component, OnDestroy, OnInit } from '@angular/core';
import { Ingredient } from '../shared/ingredient.model';
import { ShoppingCartDataService } from '../shared/shopping-cart-data.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit, OnDestroy{
  
  ingredients: Ingredient[] = [] ;

  modificationSubscription: Subscription;

  constructor(private shoppingCart: ShoppingCartDataService){}

  ngOnInit(): void {
    this.shoppingCart.getIngredients();

    this.modificationSubscription = this.shoppingCart.modified.subscribe(res=>{
      if(res !== null){
        this.ingredients = res;
      }
    })
  }

  ngOnDestroy(): void {
    this.modificationSubscription.unsubscribe();
  }

}
