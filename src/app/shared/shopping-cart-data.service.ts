import { Injectable, Output } from '@angular/core';
import { Ingredient } from "./ingredient.model";
import { Subject } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment.development';

@Injectable({
    providedIn: 'root'
})
export class ShoppingCartDataService{

    @Output() itemClick = new Subject<Ingredient>();
    @Output() addToCart = new Subject<Ingredient[]>();
    @Output() modified = new Subject<Ingredient[]>();

    ingredient: Ingredient[] = [];

    constructor(private http: HttpClient){}

    getIngredients(){
        this.http.get<Ingredient[]>(environment.apiUrl + '/cart.json')
        .subscribe(res=>{
            if(res !== null){
                this.ingredient = res;
                this.modified.next(this.ingredient);
            }
        })
    }

    pushIngredients(items: Ingredient[]){
        this.http.put<Ingredient[]>(environment.apiUrl + '/cart.json', items)
        .subscribe(res=>{
            console.log('put response : ' + res);
            this.modified.next(this.ingredient);
        })
    }

    addIngrediant(item: Ingredient){
        this.ingredient.push(item);
        this.pushIngredients(this.ingredient);
        console.log('added and pushed');
    }

    removeIngredient(index: number){
        this.ingredient.splice(index, 1);
        this.pushIngredients(this.ingredient);
    }

    pushChanges(){
        this.pushIngredients(this.ingredient);
    }
}