import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AllMoviesComponent } from './pages/all-movies/all-movies.component';
import { MostValuedComponent } from './pages/most-valued/most-valued.component';
import { LessValuedComponent } from './pages/less-valued/less-valued.component';
import { HeroComponent } from './components/hero/hero.component';
import { HeaderComponent } from './components/header/header.component';
import { MovieComponent } from './pages/movie/movie.component';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [
    AllMoviesComponent,
    MostValuedComponent,
    LessValuedComponent,
    HeroComponent,
    HeaderComponent,
    MovieComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule
  ],
  exports: [
    AllMoviesComponent,
    MostValuedComponent,
    LessValuedComponent,
    HeroComponent,
    HeaderComponent,
    MovieComponent
  ]
})
export class BlockMasterModule { }