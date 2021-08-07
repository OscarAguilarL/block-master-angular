import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';

import { MovieResponse } from '../interface/movie.interface';

@Injectable({
  providedIn: 'root',
})
export class MovieService {
  private apiUrl: string = 'https://api.themoviedb.org/3';
  apiKey: string = '26226bc0d351dd2e356a4f74d1f1d276';

  get params() {
    return new HttpParams().set('api_key', this.apiKey);
  }

  constructor(private http: HttpClient) {}

  getAllMovies(): Observable<MovieResponse> {
    const url: string = `${this.apiUrl}/movie/popular`;
    return this.http.get<MovieResponse>(url, { params: this.params });
  }

  getTopRatedMovies(): Observable<MovieResponse> {
    const url: string = `${this.apiUrl}/movie/top_rated`;
    return this.http.get<MovieResponse>(url, { params: this.params });
  }

  getLessValuedMovies(): Observable<MovieResponse> {
    const url: string = `${this.apiUrl}/discover/movie`;
    return this.http.get<MovieResponse>(url, { params: this.params }).pipe(tap(console.log));
  }
}
