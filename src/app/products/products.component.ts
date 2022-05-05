import { Component, OnInit } from '@angular/core';
import { product } from './interfaces/product.interface';
import { compareDate } from 'granular date comparison/daymonthcomp.module';
import { dm_result } from 'granular date comparison/interfaces/daycomp_result.interface';
import { ProductServiceService } from '../services/product-service.service';
import { ladder } from './interfaces/ladder.interface';
@Component({
  selector: 'products_container',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {


  constructor(private prodserv:ProductServiceService) { }
  products:any = []
  ngOnInit(): void {
    this.prodserv.getproducts().subscribe(Response=>{
      console.log(Response)
      this.products = Response
    })
    console.log(this.products)
  }



  restock(prod:ladder)
  {

    let ttr:dm_result = compareDate(new Date(prod.restock_Date), new Date)

    if(ttr.before) return 'buy soon';
    else if (!ttr.year_dif || !ttr.month_dif)
    {
      return `restocks in ${ttr.date_dif} days`
    }
    else
    return ''
  }
  stockwarn(prod:ladder)
  {
    if (prod.availibility > 500) return 'in stock.'
    else if (prod.availibility < 100  && prod.availibility > 30) return 'stock running low buy soon'
    else if(prod.availibility > 0) return `only ${prod.availibility} left in stock. ${this.restock(prod)}`; //FIXME this particular call of restock isn't working
    else return `out of stock.`
  }

}
