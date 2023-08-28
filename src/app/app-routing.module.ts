import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { NotFoundComponent } from './not-found/not-found.component';

const routes: Routes = [
  {path: 'cart', loadChildren: ()=> import('./shopping-list/shopping-list.module').then(m=>m.ShoppingListModule)},
  {path: 'recipe', loadChildren: ()=> import('./recipe/recipe.module').then(m=>m.RecipeModule) },
  {path: '', redirectTo:'/recipe', pathMatch:'full'},
  {path: '**', component:NotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {preloadingStrategy: PreloadAllModules})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
