import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
// import components
import { HomePageComponent } from './home-page/home-page.component';
import { IngredientsPageComponent } from './ingredients-page/ingredients-page.component';
import { RecipesPageComponent } from './recipes-page/recipes-page.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

const routes: Routes = [
  // root path
  {
    path: '',
    children: [
      {
        path: '',
        pathMatch: 'full',
        component: HomePageComponent
      },
      {
        path: 'ingredients',
        pathMatch: 'full',
        component: IngredientsPageComponent
      },
      {
        path: 'recipes',
        pathMatch: 'full',
        component: RecipesPageComponent
      }
    ]
  },
  // if user navigates to an undefined route, redirect to PageNotFoundComponent
  {
    path: '**',
    component: PageNotFoundComponent,
  }
];

export const routing: ModuleWithProviders = RouterModule.forRoot(routes);
