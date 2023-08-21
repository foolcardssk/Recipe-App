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
  addToCartSubscription: Subscription;
  constructor(private shoppingCart: ShoppingCartDataService){}


  ngOnInit(): void {
    
    this.itemClickSubscription = this.shoppingCart.itemClick.subscribe(data=>{
      this.cartForm.setValue(data);
    });

    // this.addToCartSubscription = this.shoppingCart.addToCart.subscribe(data=>{
    //   for(let ele of data){
    //     let temp = this.shoppingCart.ingredient.findIndex(data=>data.name === ele.name);
    //     if( temp > -1){
    //       console.log(`Previous Val ${this.shoppingCart.ingredient[temp].quantity}`);
    //       this.shoppingCart.ingredient[temp].quantity += ele.quantity
    //       console.log(`Updated Val ${this.shoppingCart.ingredient[temp].quantity}`);
          
    //     }
    //     else{
    //       this.shoppingCart.addIngrediant(ele)
    //       console.log("pushed data");
    //     }
    //   }
    // })

  }

  ngOnDestroy(): void {
    this.itemClickSubscription.unsubscribe();
    // this.addToCartSubscription.unsubscribe();
  }

  findCartIndex(name: string): number{
    return this.shoppingCart.ingredient.findIndex(data=>data.name === this.cartForm.value.name);
  }

  onAdd(){
    const temp = this.findCartIndex(this.cartForm.value.name)
    if( temp > -1){
     this.shoppingCart.ingredient[temp].quantity += this.cartForm.value.quantity
    }
    else{
      this.shoppingCart.addIngrediant(this.cartForm.value)
    }
  }

  onRemove(){
    const temp = this.findCartIndex(this.cartForm.value.name)
    if( temp > -1){
      this.shoppingCart.ingredient.splice(temp, 1);
      this.cartForm.reset();
    }
  }
}
