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
  
  addRecipeMode: boolean = false;
  addToCartSubscription: Subscription;
  fetchRecipeSubscription: Subscription;

  recipes: Recipe[] = [];

  constructor(private shoppingCart: ShoppingCartDataService, private recipeData: RecipeDataService){}
  

  ngOnInit(): void {

    this.fetchRecipeSubscription = this.recipeData.getRecipe().subscribe(res=>{
      console.log('result : ' + res);
      if(res !== null){
        this.recipes = res;
      }
    })

    this.addToCartSubscription = this.shoppingCart.addToCart.subscribe(itemsToBeAdded=>{
      console.log('no. items to be added ' + itemsToBeAdded.length);
      
      for(let ele of itemsToBeAdded){
        let temp = this.shoppingCart.ingredient.findIndex(item=>item.name === ele.name);
        if( temp > -1){
          this.shoppingCart.ingredient[temp].quantity += ele.quantity;

        }
        else{
          this.shoppingCart.addIngrediant(ele)
          console.log(ele);
          
          console.log("pushed data");
        }
      }
    })
  }

  ngOnDestroy(): void {
    this.addToCartSubscription.unsubscribe();
    this.fetchRecipeSubscription.unsubscribe();
  }

  // pushRecipe(recipe: Recipe){
  //   this.recipeData.recipes.push(recipe);
  //   this.addRecipeMode = false;
  // }

  pushRecipe(recipe: Recipe){
    this.recipes.push(recipe);
    // this.addRecipeMode = false;
    this.recipeData.pushRecipe(this.recipes).subscribe(res=>console.log(res));
  }
}
