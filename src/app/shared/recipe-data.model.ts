import { Ingredient } from "./ingredient.model";

export interface Recipe{
    name: string;
    image?: string;
    description: string;
    ingredients?: Ingredient[];
}