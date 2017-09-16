import { Injectable } from '@angular/core';
import { Http, Jsonp } from '@angular/http';
import { Observable } from 'rxjs';
import 'rxjs/add/operator/map';

@Injectable()
export class RecipesService {
  private API_URL: string = 'http://www.recipepuppy.com/api/?';

  constructor(
    private http: Http,
    private jsonp: Jsonp
  ) {}

  /**
   * fetches a list of recipes from the provided ingredients
   * @param ingredients - a string of comma-separated ingredients
   */
  fetchRecipesByIngredient(ingredients: string): Observable<any> {
    return this.http.get(`${this.API_URL}i=${ingredients}`)
      .map(res => res.json());
  }

}
