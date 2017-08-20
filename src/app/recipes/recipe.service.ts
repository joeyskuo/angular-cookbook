import {Recipe} from "./recipe.model";
import {EventEmitter, Injectable} from "@angular/core";
import {Ingredient} from "../shared/ingredient.model";
import {ShoppingListService} from "../shopping-list/shopping-list.service";

@Injectable()
export class RecipeService {

  recipeSelected = new EventEmitter<Recipe>();

  private recipes: Recipe[] = [
    new Recipe(
      'Assorted Fruits',
      'Lots of Vitamins',
      'https://sc01.alicdn.com/kf/HTB10zI_FFXXXXbHXVXXq6xXFXXXw/202690789/HTB10zI_FFXXXXbHXVXXq6xXFXXXw.jpg',
      [
        new Ingredient('Banana', 1),
        new Ingredient('Apple', 2)
      ]),
    new Recipe(
      'Chicken Salad',
      'Low Calorie Meal',
      'http://food.fnr.sndimg.com/content/dam/images/food/fullset/2013/1/30/1/GL1B03_Chinese-Chicken-Salad_s4x3.jpg.rend.hgtvcom.406.305.suffix/1499170391403.jpeg',
      [
        new Ingredient('Chicken', 1),
        new Ingredient('Lettuce', 1)
      ])
  ];

  constructor(private slService: ShoppingListService){}

  getRecipes() {
    return this.recipes.slice();
  }

  addIngredientsToShoppingList(ingredients: Ingredient[]){
    this.slService.addIngredients(ingredients);
  }

}
