import { Component, OnDestroy, OnInit } from '@angular/core';
import { RecipeDataService } from '../shared/recipe-data.service';
import { ShoppingCartDataService } from '../shared/shopping-cart-data.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-recipe',
  templateUrl: './recipe.component.html',
  styleUrls: ['./recipe.component.css']
})
export class RecipeComponent implements OnInit, OnDestroy{
  

  addToCartSubscription: Subscription;

  constructor(private shoppingCart: ShoppingCartDataService){}
  

  ngOnInit(): void {
    this.addToCartSubscription = this.shoppingCart.addToCart.subscribe(itemsToBeAdded=>{
      console.log('no. items to be added ' + itemsToBeAdded.length);
      
      for(let ele of itemsToBeAdded){
        let temp = this.shoppingCart.ingredient.findIndex(item=>item.name === ele.name);
        if( temp > -1){

          console.log(`Item already present in cart at ${temp}`);
          console.log(`Previous Val ${this.shoppingCart.ingredient[temp].quantity}`);

          this.shoppingCart.ingredient[temp].quantity += ele.quantity
          
          console.log(`Updated Val ${this.shoppingCart.ingredient[temp].quantity}`);
          
        }
        else{
          this.shoppingCart.addIngrediant(ele)
          console.log("pushed data");
        }
      }
    })
  }

  ngOnDestroy(): void {
    this.addToCartSubscription.unsubscribe();
  }
}
