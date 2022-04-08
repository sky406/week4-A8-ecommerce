import { Component, OnInit } from '@angular/core';
import { ladders } from './data/ladders.db';
import { product } from './interfaces/product.interface';
import { g_product } from './interfaces/product.interface';
import { compareDate } from '../product/time/quicker modules for angular/granular date comparison/daymonthcomp.module';
import { dm_result } from '../product/time/quicker modules for angular/granular date comparison/interfaces/daycomp_result.interface';
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

  restock(prod:product)
  {
    let ttr:dm_result= compareDate(prod.restock_date)

    if(ttr.before) return 'buy soon';
    else if (!ttr.year_dif || !ttr.month_dif)
    {
      return `restocks in ${ttr.date_dif} days`
    }
    else
    return 'eventually'
  }
  stockwarn(prod:product)
  {
    if (prod.avalibility > 500) return 'in stock'
    else if (prod.avalibility > 100) return 'stock running low buy soon'
    else if(prod.avalibility>0) return `only ${prod.avalibility} left in stock. ${this.restock(prod)}`;
    else return `sold out.`
  }

}
