import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { CommonModule } from "@angular/common";
import { ShoppingListComponent } from "./shopping-list.component";
import { ShoppingListItemComponent } from "./shopping-list-item/shopping-list-item.component";
import { ShoppingListAddItemComponent } from "./shopping-list-add-item/shopping-list-add-item.component";
import { RouterModule, Routes } from "@angular/router";

const routes: Routes = [
    {path:'', component:ShoppingListComponent},
]

@NgModule({
    declarations: [
        ShoppingListComponent,
        ShoppingListItemComponent,
        ShoppingListAddItemComponent
    ],
    imports: [
        CommonModule,
        FormsModule,
        RouterModule.forChild(routes)
    ],
    exports: [
        RouterModule
    ]
})
export class ShoppingListModule{}