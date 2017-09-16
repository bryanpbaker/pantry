import { Component, OnInit } from '@angular/core';
import {NgForm} from '@angular/forms';

@Component({
  selector: 'app-ingredients-page',
  templateUrl: './ingredients-page.component.html',
  styleUrls: ['./ingredients-page.component.css']
})
export class IngredientsPageComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  formSubmit(f: NgForm) {
    let searchTerm = '';

    f.value.ingredients.map((ingredient) => {
      searchTerm += `${ingredient.value},`;
    });

    console.log(searchTerm);
  }

}
