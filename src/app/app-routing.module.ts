import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AllMoviesComponent } from './block-master/pages/all-movies/all-movies.component';
import { MostValuedComponent } from './block-master/pages/most-valued/most-valued.component';
import { LessValuedComponent } from './block-master/pages/less-valued/less-valued.component';
import { MovieComponent } from './block-master/pages/movie/movie.component';
import { SearchComponent } from './block-master/pages/search/search.component';

const routes: Routes = [
  {
    path: '',
    component: AllMoviesComponent,
    pathMatch: 'full',
  },
  {
    path: 'most-valued',
    component: MostValuedComponent,
  },
  {
    path: 'less-valued',
    component: LessValuedComponent,
  },
  {
    path: 'search/:query',
    component: SearchComponent,
  },
  {
    path: 'movie/:id',
    component: MovieComponent,
  },
  {
    path: '**',
    // redirectTo: '404Component',
    redirectTo: '',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
