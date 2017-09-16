import { Component, OnInit } from '@angular/core';
import {NgForm} from '@angular/forms';
// import services
import { RecipesService } from '../services/recipes/recipes.service';

@Component({
  selector: 'app-ingredients-page',
  templateUrl: './ingredients-page.component.html',
  styleUrls: ['./ingredients-page.component.css']
})
export class IngredientsPageComponent implements OnInit {

  constructor(
    private RecipesService: RecipesService
  ) { }

  ngOnInit() {
  }

  public recipes: Array<Object>;

  formSubmit(f: NgForm) {
    let searchTerm = '';

    f.value.ingredients.map((ingredient) => {
      searchTerm += `${ingredient.value},`;
    });

    this.RecipesService.fetchRecipesByIngredient(searchTerm)
      .subscribe((response) => {
        this.recipes = response.results.map((recipe) => {
          console.log(recipe);
          return recipe;
        })
      });
  }

}
