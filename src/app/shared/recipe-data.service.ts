import { Injectable, Output } from '@angular/core';
import { Recipe } from './recipe-data.model';
import { Subject } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment.development';

@Injectable({
  providedIn: 'root'
})
export class RecipeDataService {

  @Output() recipeChoosen = new Subject<Recipe>();

  constructor(private http: HttpClient){}

  getRecipe(){
    return this.http.get<Recipe[]>(environment.apiUrl + '/recipes.json');
  }

  pushRecipe(recipes: Recipe[]){
    return this.http.put<Recipe[]>(environment.apiUrl + '/recipes.json', recipes);
  }

  // recipes : Recipe[] = [{
  //   name:'Biriyani',
  //   description:'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Dignissim diam quis enim lobortis. Nisl suscipit adipiscing bibendum est. Risus feugiat in ante metus dictum at tempor commodo ullamcorper.',
  //   image:'https://img.freepik.com/free-photo/veg-biryani-veg-pulav-fried-rice-indian-food-generative-ai_1258-151588.jpg?size=626&ext=jpg',
  //   ingredients:[{
  //     name:'chicken',
  //     quantity:1
  //   },
  //   {
  //     name:'rice',
  //     quantity:1
  //   },
  //   {
  //     name:'spices',
  //     quantity:1
  //   }]
  // },
  // {
  //   name:'Egg Fried Noodles',
  //   description:'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Dignissim diam quis enim lobortis. Nisl suscipit adipiscing bibendum est. Risus feugiat in ante metus dictum at tempor commodo ullamcorper.',
  //   image:'https://img.freepik.com/free-photo/top-view-delicious-noodles-concept_23-2148773774.jpg?size=626&ext=jpg',
  //   ingredients:[{
  //     name:'eggs',
  //     quantity:2
  //   }]
  // },
  // {
  //   name:'Pizza',
  //   description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Cursus sit amet dictum sit amet. Eu volutpat odio facilisis mauris. Turpis in eu mi bibendum neque egestas.',
  //   image:'https://img.freepik.com/free-photo/tasty-homemade-traditional-pizza-italian-recipe_24972-2141.jpg?size=626&ext=jpg',
  //   ingredients:[{
  //     name:'pizza dough',
  //     quantity:1
  //   }]
  // },
  // {
  //   name:'Big Fat Burger',
  //   description:'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Volutpat commodo sed egestas egestas. Porttitor lacus luctus accumsan tortor posuere. Id nibh tortor id aliquet lectus proin nibh nisl condimentum.',
  //   image:'https://img.freepik.com/free-photo/big-sandwich-hamburger-with-juicy-beef-burger-cheese-tomato-red-onion-wooden-table_2829-19631.jpg?size=626&ext=jpg',
  //   ingredients:[{
  //     name:'beef',
  //     quantity:1
  //   }]
  // }];
}
