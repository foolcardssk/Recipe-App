import { Component, OnInit } from '@angular/core';
import { Recipe } from '../../shared/recipe-data.model';
import { RecipeDataService } from '../../shared/recipe-data.service';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit{

  recipes: Recipe[];
  constructor(private recipeData: RecipeDataService){}

  ngOnInit(): void {
    this.recipes = this.recipeData.recipes;
  }

  onRecipeClick(recipe: Recipe){
    this.recipeData.recipeChoosen.next(recipe)
  }

}
