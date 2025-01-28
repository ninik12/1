import { Component } from '@angular/core';
import { ProductService } from '../product.service';
@Component({
  selector: 'app-cart',
  standalone: false,
  
  templateUrl: './cart.component.html',
  styleUrl: './cart.component.css'
})
export class CartComponent {

  product:any[]=[];


  constructor(private productsService:ProductService){
    this.product = this.productsService.cart;
    

  }

  get cartItems(){
    return this.productsService.cart;
  }
  

  removeFromCart(productId:number){
    this.productsService.removeFromCart(productId)
  }


  clearCart(){
    this.productsService.clearCart()
  }

  get totalPrice(): number {
    return this.productsService.getTotalPrice();
  }


  

  getQuantity(productId: number) : number {
    return this.productsService.getQuantity(productId);
  }




}
