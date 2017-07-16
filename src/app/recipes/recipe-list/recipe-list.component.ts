import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {

  recipes: Recipe[] = [
      new Recipe('A Test Recipe', 'Apples, Oranges, Bananas','https://sc01.alicdn.com/kf/HTB10zI_FFXXXXbHXVXXq6xXFXXXw/202690789/HTB10zI_FFXXXXbHXVXXq6xXFXXXw.jpg')
  ];
    
  constructor() { }

  ngOnInit() {
  }

}
