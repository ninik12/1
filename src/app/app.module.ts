import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { RouterModule,Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { CartComponent } from './cart/cart.component';
import { ContactComponent } from './contact/contact.component';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { FooterComponent } from './footer/footer.component';
import { ProductsComponent } from './products/products.component';

const appRoutes:Routes=[
  {path:'',component:AppComponent},
  {path:'products',component:ProductsComponent},
  {path:'header',component:HeaderComponent},
  {path:'contact',component:ContactComponent},
  {path:'cart',component:CartComponent},
  {path:'productDetails/:id',component:ProductDetailsComponent}
]

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    CartComponent,
    ContactComponent,
    ProductDetailsComponent,
    FooterComponent,
    ProductsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
