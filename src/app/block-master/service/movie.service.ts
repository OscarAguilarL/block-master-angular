import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { MovieResponse } from '../interface/movie.interface';

@Injectable({
  providedIn: 'root',
})
export class MovieService {
  private apiUrl: string = 'https://api.themoviedb.org/3/movie';

  get params() {
    return new HttpParams().set('api_key', '26226bc0d351dd2e356a4f74d1f1d276');
  }

  constructor(private http: HttpClient) {}

  getAllMovies() {
    const url: string = `${this.apiUrl}/popular`;
    return this.http.get<MovieResponse>(url, { params: this.params });
  }
}
