import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {

 @Output() recipeWasSelected = new EventEmitter<Recipe>();
    
  recipes: Recipe[] = [
      new Recipe('A Test Recipe', 'Apples, Oranges, Bananas','https://sc01.alicdn.com/kf/HTB10zI_FFXXXXbHXVXXq6xXFXXXw/202690789/HTB10zI_FFXXXXbHXVXXq6xXFXXXw.jpg'),
        new Recipe('Healthy Eats', 'Chicken Salad','http://food.fnr.sndimg.com/content/dam/images/food/fullset/2013/1/30/1/GL1B03_Chinese-Chicken-Salad_s4x3.jpg.rend.hgtvcom.406.305.suffix/1499170391403.jpeg'),
  ];
    
  constructor() { }

  ngOnInit() {
  }

    onRecipeSelected(recipe: Recipe) {
        this.recipeWasSelected.emit(recipe);
        console.log(`recipeWasSelected emitted with $event = ${recipe.name}`);
    }
    
}
