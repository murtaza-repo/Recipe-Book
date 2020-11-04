import { Injectable } from '@angular/core';
import { Ingredient } from '../shared/ingredient.model';
import { ShoppingListService } from '../shopping-list/shopping-list.service';
import { Recipe } from './recipe.model';

@Injectable()
export class RecipeService{

    constructor(private slService: ShoppingListService){}

    recipes: Recipe[] = [
        new Recipe(
          'Veg Burger',
          'A veggie burger is a burger patty that does not contain meat. These burgers may be made from ingredients like beans, especially soybeans and tofu, nuts, grains, seeds or fungi such as mushrooms or mycoprotein. The patties that are the essence of a veggie burger have existed in various Eurasian cuisines for millennia, including in the form of disc-shaped grilled or fried meatballs or as koftas, a commonplace item in Indian cuisine. These may contain meats or be made of entirely vegetarian ingredients such as legumes or other plant-derived proteins.',
          'https://storage.googleapis.com/gen-atmedia/3/2019/05/a94cfde51967df5caf0f1641f53a5470df4421c1.jpeg',
          [
              new Ingredient('Mix vegetable patties',1),
              new Ingredient('Mayonnaise', 1),
              new Ingredient('Cucumber', 2),
              new Ingredient('Tomato', 2),
              new Ingredient('Onion slices', 10)
          ]
        ),
        new Recipe(
          'Veg paneer pizza',
          'Pizza is a flat bread which is prepared with all purpose flour and fermented with yeast. It is typically topped with mozzarella cheese, pizza tomato sauce and other vegetarian pizza toppings. Pizza can be consumed as snack, but not limited for lunch and dinner too.',
          'https://www.sinceindependence.com/wp-content/uploads/2020/04/July-Recipes-26.jpg',
          [
              new Ingredient('Pizza Base', 1),
              new Ingredient('Mozarella Cheese', 1),
              new Ingredient('Pizza Tomato sauce', 1),
              new Ingredient('Pizza Toppings', 10)
          ]
        )
    ];

    getRecipes(){
        return this.recipes.slice();
    }

    getRecipe(index: number){
        return this.recipes[index];
    }

    addIngredientsToShoppingList(ingredients: Ingredient[]) {
        this.slService.addIngredients(ingredients);
      }
}