import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  recipes: Recipe[] = [
    new Recipe(
      "a test recipe",
      "test",
      "http://lorempixel.com/50/50"
    ),
    new Recipe(
      "a second recipe",
      "test",
      "http://lorempixel.com/50/50"
    )
  ];

  constructor() { }

  ngOnInit() {
  }



}
