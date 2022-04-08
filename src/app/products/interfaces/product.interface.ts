export interface product
{
  name:string,
  price:string,
  avalibility:number | string,
  restock_date:Date,
  img:string
  description:string
}

// ladder co
export function g_product(name:string = 'lorem',price:number = 6.99,num_availible:number = 100,restock_date:Date = new Date, img:string = '',description:string = 'lorem ipsum'):product
{
  return{
    name:name,
    price:`$${price.toFixed(2)}`,
    avalibility:num_availible,
    restock_date:restock_date,
    img:img,
    description:description
  }
}
