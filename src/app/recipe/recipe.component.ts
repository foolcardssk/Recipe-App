import { Component, OnDestroy, OnInit } from '@angular/core';
import { ShoppingCartDataService } from '../shared/shopping-cart-data.service';
import { Subscription } from 'rxjs';
import { Recipe } from '../shared/recipe-data.model';
import { RecipeDataService } from '../shared/recipe-data.service';

@Component({
  selector: 'app-recipe',
  templateUrl: './recipe.component.html',
  styleUrls: ['./recipe.component.css']
})
export class RecipeComponent implements OnInit, OnDestroy{
  
  addRecipeMode: boolean = true;
  addToCartSubscription: Subscription;

  constructor(private shoppingCart: ShoppingCartDataService, private recipeData: RecipeDataService){}
  

  ngOnInit(): void {
    this.addToCartSubscription = this.shoppingCart.addToCart.subscribe(itemsToBeAdded=>{
      console.log('no. items to be added ' + itemsToBeAdded.length);
      
      for(let ele of itemsToBeAdded){
        let temp = this.shoppingCart.ingredient.findIndex(item=>item.name === ele.name);
        if( temp > -1){
          this.shoppingCart.ingredient[temp].quantity += ele.quantity;
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

  pushRecipe(recipe: Recipe){
    this.recipeData.recipes.push(recipe);
    this.addRecipeMode = false;
  }
}
