import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ProductService } from '../product.service';
@Component({
  selector: 'app-products',
  standalone: false,
  
  templateUrl: './products.component.html',
  styleUrl: './products.component.css'
})
export class ProductsComponent {

  products:any[]=[];
  filteredProducts:any[]=[];
  searchQuery = ''

  constructor(private productService:ProductService, private router: Router){
    this.products = this.productService.products;
    this.filteredProducts = this.products;
  };

  ngOnInit():void{
    this.products=this.productService.products
  }


  addToCart(product:any){
    this.productService.addToCart(product);
  }

  onSearch(){
    this.filteredProducts = this.productService.filterProductByName(this.searchQuery);
  }

  getQuantity(productId: number): number{
    return this.productService.getQuantity(productId);
  }


  viewProductDetail(productId: number) {
    this.router.navigate(['/product', productId]); 
  }





}
