import { Component, Input } from '@angular/core';
import { Ingredient } from 'src/app/shared/ingredient.model';
import { ShoppingCartDataService } from 'src/app/shared/shopping-cart-data.service';

@Component({
  selector: 'app-shopping-list-item',
  templateUrl: './shopping-list-item.component.html',
  styleUrls: ['./shopping-list-item.component.css']
})
export class ShoppingListItemComponent {

  @Input() item: Ingredient;

  constructor(private shoppingCart: ShoppingCartDataService){}

  onItemClick(item: Ingredient){
    this.shoppingCart.itemClick.next(item);
  }

}
