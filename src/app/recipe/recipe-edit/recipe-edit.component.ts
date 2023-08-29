import { NgForm } from '@angular/forms';
import { Recipe } from 'src/app/shared/recipe-data.model';
import { Ingredient } from 'src/app/shared/ingredient.model';
import { Component, OnInit, ViewChild, Output, EventEmitter, OnDestroy } from '@angular/core';
import { RecipeDataService } from 'src/app/shared/recipe-data.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-recipe-edit',
  templateUrl: './recipe-edit.component.html',
  styleUrls: ['./recipe-edit.component.css']
})
export class RecipeEditComponent implements OnInit, OnDestroy{
  
  @ViewChild('f')form: NgForm;

  @Output() recipeModified = new EventEmitter<{recipe: Recipe,index: number}>();
  @Output() goBackEvent = new EventEmitter<Recipe>();

  recipe: {recipe: Recipe,index: number};
  ingredients: Ingredient[] = [];

  recipeChoosenSubscrption: Subscription;

  constructor(private recipeData: RecipeDataService){}
  
  ngOnInit(): void {
    this.recipeChoosenSubscrption = this.recipeData.recipeChoosen.subscribe(data=>{
      this.recipe = data;
      this.initForm();
    })
  }

  ngOnDestroy(): void {
    this.recipeChoosenSubscrption.unsubscribe();
  }

  initForm(){
    this.ingredients = this.recipe.recipe.ingredients;
  }

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
    this.recipe.recipe = {
      name: this.form.value.name,
      description: this.form.value.description,
      image: this.form.value.image,
      ingredients: structuredClone(this.ingredients)
    }
    this.recipeModified.emit(this.recipe);
    this.form.reset();
  }

  onGoBack(){
    this.goBackEvent.emit(this.recipe.recipe);
  }
}
