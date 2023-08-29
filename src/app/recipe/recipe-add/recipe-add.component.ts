import { Ingredient } from './../../shared/ingredient.model';
import { Component, Output, ViewChild, EventEmitter } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Recipe } from 'src/app/shared/recipe-data.model';

@Component({
  selector: 'app-recipe-add',
  templateUrl: './recipe-add.component.html',
  styleUrls: ['./recipe-add.component.css']
})
export class RecipeAddComponent {

  @ViewChild('f')form: NgForm;

  @Output() newRecipeAdded = new EventEmitter<Recipe>();

  recipe: Recipe;
  ingredients: Ingredient[] = [];
  
  onAdd(): void{    
    const index = this.ingredients.findIndex(val=>val.name === this.form.value.ingredient.trim().toLowerCase())
    if(index > -1){
      this.ingredients[index].quantity += this.form.value.quantity;
    }
      else{
        this.ingredients.push({
        name: this.form.value.ingredient.trim().toLowerCase(),
        quantity: this.form.value.quantity
      })
    }
    this.form.setValue({
      name: this.form.value.name,
      image: this.form.value.image,
      description: this.form.value.description,
      ingredient: '',
      quantity: 0
    })
  }

  onRemove(){
    const index = this.ingredients.findIndex(val=>val.name === this.form.value.ingredient.trim().toLowerCase())
    if(index > -1){
      this.ingredients.splice(index, 1);
    }
  }

  onClick(ingredient: Ingredient){
    console.log('clicked');
    
    this.form.setValue({
      name: this.form.value.name,
      image: this.form.value.image,
      description: this.form.value.description,
      ingredient: ingredient.name,
      quantity: ingredient.quantity
    })
    this.form.value.quantity = ingredient.quantity
  }

  onSubmit(){
    this.recipe = {
      name: this.form.value.name,
      description: this.form.value.description,
      image: this.form.value.image,
      ingredients: structuredClone(this.ingredients)
    }
    this.newRecipeAdded.emit(this.recipe);
    this.form.reset();
  }
}
