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
  query: string = '';
  isError: boolean = false;

  constructor(
    private activatedRoute: ActivatedRoute,
    private movieService: MovieService
  ) {}

  ngOnInit(): void {
    this.activatedRoute.params
      .pipe(
        switchMap(({ query }) => {
          this.isError = false;
          this.query = query;
          return this.movieService.getSearch(this.query);
        })
      )
      .subscribe(
        (resp) => {
          resp.results.length === 0
            ? (this.isError = true)
            : (this.movies = resp.results);
        },
        (err) => {
          this.isError = true;
        }
      );
  }
}
