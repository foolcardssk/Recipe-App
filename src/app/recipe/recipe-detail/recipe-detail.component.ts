import { Recipe } from '../../shared/recipe-data.model';
import { Component, OnInit, Output, EventEmitter, OnDestroy } from '@angular/core';
import { RecipeDataService } from '../../shared/recipe-data.service';
import { ShoppingCartDataService } from 'src/app/shared/shopping-cart-data.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.css']
})
export class RecipeDetailComponent implements OnInit, OnDestroy{

  @Output() addRecipeEvent = new EventEmitter<any>();
  @Output() editRecipeEvent = new EventEmitter<any>();

  recipeChoosenSubscrption: Subscription;

  recipeClicked: boolean = false;
  recipe: {recipe: Recipe,index: number};

  constructor(private recipeData: RecipeDataService, private shoppingCart: ShoppingCartDataService){}
  ngOnInit(): void {
    this.recipeChoosenSubscrption = this.recipeData.recipeChoosen.subscribe(data=>{
      this.recipeClicked = true;
      this.recipe = data;
    })
  }

  ngOnDestroy(): void {
    this.recipeChoosenSubscrption.unsubscribe();
  }

  onAddToCart(){
    this.shoppingCart.addToCart.next(structuredClone(this.recipe.recipe.ingredients));
  }

  onAddRecipe(){
    this.addRecipeEvent.emit();
  }
  
  onEditRecipe(){
    this.editRecipeEvent.emit();
    this.recipeData.recipeChoosen.next(this.recipe);
  }
}
