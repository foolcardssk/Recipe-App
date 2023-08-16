import { Injectable, Output } from '@angular/core';
import { Recipe } from './recipe-data.model';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RecipeDataService {


  @Output() recipeChoosen = new Subject<Recipe>();

  recipes : Recipe[] = [{
    name:'Biriyani',
    description:'Hyderabad Style, Fire in mouth !',
    image:'https://img.freepik.com/free-photo/veg-biryani-veg-pulav-fried-rice-indian-food-generative-ai_1258-151588.jpg?size=626&ext=jpg'
  },
  {
    name:'Egg Fried Noodles',
    description:'Uncle Roger Recipe !. What more do you need !?',
    image:'https://img.freepik.com/free-photo/top-view-delicious-noodles-concept_23-2148773774.jpg?size=626&ext=jpg'
  },
  {
    name:'Pizza',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Cursus sit amet dictum sit amet. Eu volutpat odio facilisis mauris. Turpis in eu mi bibendum neque egestas.',
    image:'https://img.freepik.com/free-photo/traditional-supreme-pizza-black-stone_123827-20345.jpg?size=626&ext=jpg'
  },
  {
    name:'Big Fat Burger',
    description:'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Volutpat commodo sed egestas egestas. Porttitor lacus luctus accumsan tortor posuere. Id nibh tortor id aliquet lectus proin nibh nisl condimentum.',
    image:'https://img.freepik.com/free-photo/big-sandwich-hamburger-with-juicy-beef-burger-cheese-tomato-red-onion-wooden-table_2829-19631.jpg?size=626&ext=jpg'
  }];
}
