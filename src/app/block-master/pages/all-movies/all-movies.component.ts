import { Component, OnInit } from '@angular/core';
import { MovieService } from '../../service/movie.service';

@Component({
  selector: 'app-all-movies',
  templateUrl: './all-movies.component.html',
  styleUrls: ['./all-movies.component.css'],
})
export class AllMoviesComponent implements OnInit {
  movies = [];

  constructor(private movieService: MovieService) {}

  ngOnInit(): void {
    this.getMovies();
  }

  getMovies() {
    this.movieService.getAllMovies().subscribe(
      (movies) => console.log(movies),
      (err) => console.log(err)
    );
  }
}
