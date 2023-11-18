
//Type Product 
export type TProduct = {
    brand:string,
    title:string,
    category:string,
    description : string,
    stock:94,
    discountPercentage:number,
    rating: {
        rate:number,
        count:number
    },
    thumbnail:string,
    price : number
    image : string
}

//& class Product
// export class Product{
//     title
//     category
//     desc
//     price
//     constructor(t:string,c:string,d:string,p:number){
//         this.category = c;
//         this.title = t;
//         this.desc =d ;
//         this.price = p;
//     }
    
//     Detail(){
//         return `title : ${this.title} category : ${this.category} price : ${this.price} description : ${this.desc}`
//     }
//     //! we can ad mroe functionallity like get out of stock buy buying it 
// }
