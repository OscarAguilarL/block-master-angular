import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-input-search',
  templateUrl: './input-search.component.html',
  styleUrls: ['./input-search.component.css'],
})
export class InputSearchComponent implements OnInit {
  termino: string = '';

  constructor(private router: Router) {}

  ngOnInit(): void {}

  buscar() {
    this.termino = this.termino.replace(' ', '-')
    this.router.navigate(['/search', this.termino])
    this.termino = ''
  }
}
