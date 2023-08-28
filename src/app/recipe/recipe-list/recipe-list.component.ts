import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Recipe } from '../../shared/recipe-data.model';
import { RecipeDataService } from '../../shared/recipe-data.service';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent{

  @Input() recipe: Recipe;
  @Output() recipeClicked = new EventEmitter<any>();
  
  recipes: Recipe[];

  constructor(private recipeData: RecipeDataService){}

  onRecipeClick(recipe: Recipe){
    this.recipeData.recipeChoosen.next(recipe);
    this.recipeClicked.emit();
  }

}
