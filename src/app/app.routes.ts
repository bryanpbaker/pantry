import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  // root path
  {
    path: '',
    children: [
      {
        path: '',
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
