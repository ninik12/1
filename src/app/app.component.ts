import { Component } from '@angular/core';
import { ProductService } from './product.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  standalone: false,
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'my-app';

  allProducts:[]=[];

  constructor(private product:ProductService){};

  ngOnInit(){
    this.allProducts=this.product.getProducts()
  }



}
