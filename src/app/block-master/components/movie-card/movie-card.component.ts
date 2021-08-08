import { Component, Input, OnInit } from '@angular/core';
import { Movie } from '../../interface/movie.interface';

@Component({
  selector: 'app-movie-card',
  templateUrl: './movie-card.component.html',
  styleUrls: ['./movie-card.component.css'],
})
export class MovieCardComponent implements OnInit {
  @Input() movie!: Movie;
  poster_path: string = 'https://image.tmdb.org/t/p/w500/';

  constructor() {}

  ngOnInit(): void {}
}
