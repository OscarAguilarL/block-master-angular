import { Component, Input, OnInit } from '@angular/core';
import { Movie } from '../../interface/movie.interface';

@Component({
  selector: 'app-results',
  templateUrl: './results.component.html',
  styleUrls: ['./results.component.css'],
})
export class ResultsComponent implements OnInit {
  @Input() movies: Movie[] = [];
  @Input() pageTitle: string = '';

  constructor() {}

  ngOnInit(): void {}
}
