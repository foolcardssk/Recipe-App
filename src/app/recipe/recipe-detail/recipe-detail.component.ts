import { Recipe } from '../../shared/recipe-data.model';
import { Component, OnInit } from '@angular/core';
import { RecipeDataService } from '../../shared/recipe-data.service';
import { ShoppingCartDataService } from 'src/app/shared/shopping-cart-data.service';

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.css']
})
export class RecipeDetailComponent implements OnInit{

  recipeClicked: boolean = false;
  recipe: Recipe;

  constructor(private recipeData: RecipeDataService, private shoppingCart: ShoppingCartDataService){}
  ngOnInit(): void {
    this.recipeData.recipeChoosen.subscribe(data=>{
      this.recipeClicked = true;
      this.recipe = data;
    })
  }

  onAddToCart(){
    this.shoppingCart.addToCart.next(structuredClone(this.recipe.ingrediants));
    console.log('Add to cart Btn clicked !');
    
  }

}
