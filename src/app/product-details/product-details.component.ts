import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-product-details',
  standalone: false,
  
  templateUrl: './product-details.component.html',
  styleUrl: './product-details.component.css'
})
export class ProductDetailsComponent {

  product: any;
  products:any[]=[];

  constructor(
    private route: ActivatedRoute,
    private productService:ProductService
  ){ this.products = this.productService.products;
    }


  ngOnInit(): void{
    const productId = +this.route.snapshot.paramMap.get('id')!;
    this.product =this.productService.products.find(product => product.id === productId);

  }

  addToCart(product:any){
    this.productService.addToCart(product);
  }



}
