import { Component, Input, OnInit } from '@angular/core';
import { product } from '../products/interfaces/product.interface';
import { compareDate } from './time/quicker modules for angular/granular date comparison/daymonthcomp.module';
import { dm_result } from './time/quicker modules for angular/granular date comparison/interfaces/daycomp_result.interface';
import { g_product } from '../products/interfaces/product.interface';

@Component({
  selector: 'product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {
  @Input() prod:product = g_product()

  ngOnInit(): void {
  }
  restock()
  {
    let ttr:dm_result= compareDate(this.prod.restock_date)

    if(ttr.before) return 'eventually';
    else if (!ttr.year_dif || !ttr.month_dif)
    {
      return `restocks in ${ttr.date_dif} days`
    }
    else
    return 'eventually'
  }
  stockwarn()
  {
    if (this.prod.avalibility > 500) return 'in stock'
    else if (this.prod.avalibility > 100) return 'stock running low buy soon'
    else return `only ${this.prod.avalibility} left in stock restocks ${this.restock()}`
  }

}
