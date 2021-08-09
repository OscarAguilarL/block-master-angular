import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { switchMap } from 'rxjs/operators';

import { Movie } from '../../interface/movie.interface';
import { MovieService } from '../../service/movie.service';

@Component({
  selector: 'app-movie',
  templateUrl: './movie.component.html',
  styleUrls: ['./movie.component.css'],
})
export class MovieComponent implements OnInit {
  movie!: Movie;

  constructor(
    private movieService: MovieService,
    private activatedRoute: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.activatedRoute.params
      .pipe(
        switchMap(({ id }) => {
          return this.movieService.getMovieDetails(id);
        })
      )
      .subscribe((resp) => {
        this.movie = resp;
      });
  }
}
