import { Component, OnInit } from '@angular/core';
import { MovieService } from '../../service/movie.service';
import { Movie } from '../../interface/movie.interface';

@Component({
  selector: 'app-most-valued',
  templateUrl: './most-valued.component.html',
  styleUrls: ['./most-valued.component.css'],
})
export class MostValuedComponent implements OnInit {
  movies: Movie[] = [];

  constructor(private movieService: MovieService) {}

  ngOnInit(): void {
    setTimeout(() => {
      this.movieService
        .getTopRatedMovies()
        .subscribe((resp) => (this.movies = resp.results));
    }, 500)
  }
}
