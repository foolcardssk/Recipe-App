import { Component, OnInit } from '@angular/core';
import { Ingredient } from '../shared/ingredient.model';
import { ShoppingCartDataService } from '../shared/shopping-cart-data.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit{
  
  ingredients: Ingredient[] ;
  addToCartSubscription: Subscription;

  constructor(private shoppingCart:ShoppingCartDataService){}

  ngOnInit(): void {
    this.ingredients = this.shoppingCart.ingredient;
    
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

}
