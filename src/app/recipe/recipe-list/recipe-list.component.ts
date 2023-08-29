import { Component, Input, Output, EventEmitter, OnInit } from '@angular/core';
import { Recipe } from '../../shared/recipe-data.model';
import { RecipeDataService } from '../../shared/recipe-data.service';
import { Ingredient } from 'src/app/shared/ingredient.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit{

  @Input() recipe: {recipe: Recipe, index: number };
  @Output() recipeClicked = new EventEmitter<any>();
  
  recipes: Recipe[];
  ingredient: Ingredient[] = [];

  constructor(private recipeData: RecipeDataService){}

  ngOnInit(): void {}

  onRecipeClick(recipe: {recipe: Recipe, index: number}){
    this.recipeData.recipeChoosen.next(recipe);
    this.recipeClicked.emit();
  }

}
