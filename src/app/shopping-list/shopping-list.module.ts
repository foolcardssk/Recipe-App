import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { CommonModule } from "@angular/common";
import { ShoppingListComponent } from "./shopping-list.component";
import { ShoppingListItemComponent } from "./shopping-list-item/shopping-list-item.component";
import { ShoppingListAddItemComponent } from "./shopping-list-add-item/shopping-list-add-item.component";
import { RouterModule, Routes } from "@angular/router";
import { ShoppingCartDataService } from "../shared/shopping-cart-data.service";
import { HttpClientModule } from "@angular/common/http";

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
        HttpClientModule,
        CommonModule,
        FormsModule,
        RouterModule.forChild(routes)
    ],
    exports: [
        RouterModule,
    ],
    providers:[
        ShoppingCartDataService
    ]
})
export class ShoppingListModule{}