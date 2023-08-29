import { Component, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Subscription } from 'rxjs';
import { ShoppingCartDataService } from 'src/app/shared/shopping-cart-data.service';

@Component({
  selector: 'app-shopping-list-add-item',
  templateUrl: './shopping-list-add-item.component.html',
  styleUrls: ['./shopping-list-add-item.component.css']
})
export class ShoppingListAddItemComponent implements OnInit, OnDestroy{

  @ViewChild('f') cartForm: NgForm;

  itemClickSubscription: Subscription;
  constructor(private shoppingCart: ShoppingCartDataService){}


  ngOnInit(): void {
    
    this.itemClickSubscription = this.shoppingCart.itemClick.subscribe(data=>{
      this.cartForm.setValue(data);
    });
  }

  ngOnDestroy(): void {
    this.itemClickSubscription.unsubscribe();
  }

  findCartIndex(name: string): number{
    return this.shoppingCart.ingredient.findIndex(data=>data.name === this.cartForm.value.name);
  }

  onAdd(){
    const temp = this.findCartIndex(this.cartForm.value.name)
    if( temp > -1){
      this.shoppingCart.ingredient[temp].quantity += this.cartForm.value.quantity;
      this.shoppingCart.pushChanges();
    }
    else{
      this.shoppingCart.addIngrediant(this.cartForm.value)
    }
  }

  onRemove(){
    const temp = this.findCartIndex(this.cartForm.value.name)
    if( temp > -1){
      if( this.shoppingCart.ingredient[temp].quantity === this.cartForm.value.quantity ){
        this.shoppingCart.removeIngredient(temp);
      }
      else if(this.shoppingCart.ingredient[temp].quantity >= this.cartForm.value.quantity){
        this.shoppingCart.ingredient[temp].quantity -= this.cartForm.value.quantity;
        this.shoppingCart.pushChanges();
      }
      else {
        alert('Your Value is higher than available amount !');
      }
      this.cartForm.reset();
    }
  }
}
