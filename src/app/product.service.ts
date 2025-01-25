import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor() { }

  products=[
    {id:1, name:'Teddy',price:95, image:'https://media.istockphoto.com/id/909772478/photo/brown-teddy-bear-isolated-in-front-of-a-white-background.jpg?s=612x612&w=0&k=20&c=F4252bOrMfRTB8kWm2oM2jlb9JXY08tKCaO5G_ms1Uw='},
    {id:2, name:'Doll toy set',price:95, image:'https://images-cdn.ubuy.co.in/6533589a75dc304def13bb5c-my-sweet-love-sweet-baby-doll-toy-set-4.jpg'},
    {id:3, name:'Barbie',price:95, image:'https://i5.walmartimages.com/seo/Barbie-The-Movie-Collectible-Doll-Margot-Robbie-as-Barbie-in-Pink-Gingham-Dress-Toy-for-3-Years-and-Up_43517acc-792c-4db0-8e03-54e40d42802e.a3ac52b916f2f81089fc345e6218a73d.jpeg'},
    {id:4, name:'Barbie family',price:95, image:'https://target.scene7.com/is/image/Target/GUEST_0d11f2a6-bf1b-4a88-838f-877d3a7d26e3'},
    {id:5, name:'Puppy toy set',price:95, image:'https://m.media-amazon.com/images/I/71SSw8RWGDL.jpg'},
    {id:6, name:'Kitchen toy set',price:95, image:'https://mentari.toys/cdn/shop/products/kids-kitchen-mt7521-753513.jpg?v=1702456094'},
    {id:7, name:'Vegetable and fruit toy set',price:95, image:'https://ae01.alicdn.com/kf/S350dd43864c14fc19271cc12abc3f87ek.jpg'},
    {id:8, name:'Solid Grey kitchen toy set ',price:95, image:'https://img-us.aosomcdn.com/thumbnail/100/n0/product/2022/08/15/6cV98a182a2f0f945.jpg'},
    {id:9, name:'Soccer ball ',price:95, image:'https://cdn.britannica.com/68/195168-050-BBAE019A/football.jpg'},
    {id:10, name:'Colloring balls ',price:95, image:'https://rukminim3.flixcart.com/image/850/1000/kzn17680/ball/v/n/x/100-crazy-bounce-ball-china-ball-for-kids-non-toxic-balls-for-original-imagbhrvuwytgmzs.jpeg?q=90&crop=false'},
    {id:11, name:'Doll toy',price:95, image:'https://www.adora.com/cdn/shop/products/13-inch-playtime-baby-doll-for-toddlers-pink-baby-20203004-1.jpg?v=1667945475'},
    {id:12, name:'Baby Doll stroller',price:95, image:'https://i.pinimg.com/474x/cb/f2/41/cbf241e81236cf9a43a36d9c11affdf1.jpg'},
    


  ]

  getProducts(){
    return this.products
  }




}
