import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { MovieResponse, Movie } from '../interface/movie.interface';

@Injectable({
  providedIn: 'root',
})
export class MovieService {
  private _apiUrl: string = 'https://api.themoviedb.org/3';
  private _apiKey: string = '26226bc0d351dd2e356a4f74d1f1d276';

  get params() {
    return new HttpParams().set('api_key', this._apiKey);
  }

  constructor(private http: HttpClient) {}

  getAllMovies(): Observable<MovieResponse> {
    const url: string = `${this._apiUrl}/movie/popular`;
    return this.http.get<MovieResponse>(url, { params: this.params });
  }

  getTopRatedMovies(): Observable<MovieResponse> {
    const url: string = `${this._apiUrl}/movie/top_rated`;
    return this.http.get<MovieResponse>(url, { params: this.params });
  }

  getLessValuedMovies(): Observable<MovieResponse> {
    const url: string = `${this._apiUrl}/discover/movie`;
    return this.http.get<MovieResponse>(url, { params: this.params });
  }

  getSearch(termino: string): Observable<MovieResponse> {
    termino = termino.replace('-', ' ');
    const url: string = `${this._apiUrl}/search/movie`;
    return this.http.get<MovieResponse>(url, {
      params: this.params.set('query', termino),
    });
  }

  getMovieDetails(movieId: string): Observable<Movie> {
    const url: string = `${this._apiUrl}/movie/${movieId}`;
    return this.http.get<Movie>(url, { params: this.params });
  }
}
