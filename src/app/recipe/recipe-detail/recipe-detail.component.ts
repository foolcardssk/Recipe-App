import { Recipe } from './../recipe-data.model';
import { Component, OnInit } from '@angular/core';
import { RecipeDataService } from '../recipe-data.service';

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.css']
})
export class RecipeDetailComponent implements OnInit{

  recipeClicked: boolean = false;
  recipe: Recipe;

  constructor(private recipeData: RecipeDataService){}
  ngOnInit(): void {
    this.recipeData.recipeChoosen.subscribe(data=>{
      this.recipeClicked = true;
      this.recipe = data;
    })
  }

}
