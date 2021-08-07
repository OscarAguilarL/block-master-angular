import { Component, OnInit } from '@angular/core';
import { Movie } from '../../interface/movie.interface';
import { MovieService } from '../../service/movie.service';

@Component({
  selector: 'app-less-valued',
  templateUrl: './less-valued.component.html',
  styleUrls: ['./less-valued.component.css'],
})
export class LessValuedComponent implements OnInit {
  unsortedMovies: Movie[] = [];

  get sortedMovies(): Movie[] {
    let sorted = this.unsortedMovies.sort(
      (a, b) => a.vote_average - b.vote_average
    );
    return sorted;
  }

  constructor(private movieService: MovieService) {}

  ngOnInit(): void {
    setTimeout(() => {
      this.movieService.getLessValuedMovies().subscribe((resp) => {
        this.unsortedMovies = resp.results;
      });
    }, 500);
  }
}
