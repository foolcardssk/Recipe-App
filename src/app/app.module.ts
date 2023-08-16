import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RecipeComponent } from './recipe/recipe.component';
import { ShoppingListComponent } from './shopping-list/shopping-list.component';
import { RecipeListComponent } from './recipe/recipe-list/recipe-list.component';
import { RecipeDetailComponent } from './recipe/recipe-detail/recipe-detail.component';
import { ShoppingListItemComponent } from './shopping-list/shopping-list-item/shopping-list-item.component';
import { ShoppingListAddItemComponent } from './shopping-list/shopping-list-add-item/shopping-list-add-item.component';

@NgModule({
  declarations: [
    AppComponent,
    RecipeComponent,
    ShoppingListComponent,
    RecipeListComponent,
    RecipeDetailComponent,
    ShoppingListItemComponent,
    ShoppingListAddItemComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
