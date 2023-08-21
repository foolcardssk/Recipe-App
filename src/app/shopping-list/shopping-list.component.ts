import { Component, OnInit } from '@angular/core';
import { Ingredient } from '../shared/ingredient.model';
import { ShoppingCartDataService } from '../shared/shopping-cart-data.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit{
  
  ingredients: Ingredient[] ;

  constructor(private shoppingCart:ShoppingCartDataService){}

  ngOnInit(): void {
    this.ingredients = this.shoppingCart.ingredient;
  }

}
