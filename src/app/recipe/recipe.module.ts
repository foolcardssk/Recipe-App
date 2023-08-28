import { NgModule } from "@angular/core";
import { HttpClientModule } from "@angular/common/http";
import { RecipeComponent } from "./recipe.component";
import { RecipeDetailComponent } from "./recipe-detail/recipe-detail.component";
import { RecipeListComponent } from "./recipe-list/recipe-list.component";
import { RouterModule, Routes } from "@angular/router";
import { CommonModule } from "@angular/common";
import { DescPipe } from "../shared/desc.pipe";
import { RecipeAddComponent } from './recipe-add/recipe-add.component';
import { FormsModule } from "@angular/forms";

const routes: Routes = [
    {path:'', component:RecipeComponent}
]

@NgModule({
    declarations: [
        RecipeComponent,
        RecipeListComponent,
        RecipeDetailComponent,
        DescPipe,
        RecipeAddComponent
    ],
    imports: [
        HttpClientModule,
        FormsModule,
        RouterModule,
        CommonModule,
        RouterModule.forChild(routes)
    ],
    exports: [
        RouterModule
    ]
})
export class RecipeModule{}