import { Injectable, Output } from '@angular/core';
import { Recipe } from './recipe-data.model';
import { Subject } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment.development';

@Injectable({
  providedIn: 'root'
})
export class RecipeDataService {

  @Output() recipeChoosen = new Subject<{recipe: Recipe, index: number}>();

  constructor(private http: HttpClient){}

  getRecipe(){
    return this.http.get<Recipe[]>(environment.apiUrl + '/recipes.json');
  }

  pushRecipe(recipes: Recipe[]){
    return this.http.put<Recipe[]>(environment.apiUrl + '/recipes.json', recipes);
  }
}
