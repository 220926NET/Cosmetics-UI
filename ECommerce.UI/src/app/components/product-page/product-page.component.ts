import { Component, OnInit } from '@angular/core';
import { Review } from 'src/app/models/review';

@Component({
  selector: 'app-product-page',
  templateUrl: './product-page.component.html',
  styleUrls: ['./product-page.component.css']
})
export class ProductPageComponent implements OnInit {

  reviews:Review[] = [
    new Review(0, 0, 0, 1, 'Terrible'),
    new Review(1, 1, 0, 2, 'Could be better'),
    new Review(2, 2, 0, 4, 'Great')
  ];
  constructor() { }

  ngOnInit(): void {
  }

}
