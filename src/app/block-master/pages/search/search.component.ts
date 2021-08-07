import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { switchMap } from 'rxjs/operators';

import { Movie } from '../../interface/movie.interface';
import { MovieService } from '../../service/movie.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css'],
})
export class SearchComponent implements OnInit {
  movies: Movie[] = [];

  constructor(
    private activatedRoute: ActivatedRoute,
    private movieService: MovieService
  ) {}

  ngOnInit(): void {
    this.activatedRoute.params
      .pipe(switchMap(({ query }) => this.movieService.getSearch(query)))
      .subscribe((resp) => {
        this.movies = resp.results;
      });
  }
}
