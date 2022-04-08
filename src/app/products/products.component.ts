import { Component, OnInit } from '@angular/core';
import { ladders } from './data/ladders.db';
import { product } from './interfaces/product.interface';
import { g_product } from './interfaces/product.interface';

@Component({
  selector: 'products_container',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {

  products = ladders
  constructor() { }

  ngOnInit(): void {
  }

}
