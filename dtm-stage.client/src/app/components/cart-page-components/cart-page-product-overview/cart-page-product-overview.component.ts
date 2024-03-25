import { Component, Injectable } from '@angular/core';
import { Product } from '../../../models/product';
import { EMPTY, Observable } from 'rxjs';
import { CartService } from '../../../services/cart.service';
import { CommonModule } from '@angular/common';
import { ProductService } from '../../../services/product.service';

@Component({
  selector: 'app-cart-page-product-overview',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './cart-page-product-overview.component.html',
  styleUrl: './cart-page-product-overview.component.css'
})
@Injectable({
  providedIn: 'root'
})
export class CartPageProductOverviewComponent {
  public cartProducts$: Observable<Map<Product,number>>;
  public productService$: Observable<Product[]>;

  constructor(private cartService: CartService,
              private prdocuctService: ProductService) {
    this.productService$ = this.prdocuctService.getProducts();
    this.cartProducts$ = this.cartService.getProductsInCart();
    console.log(this.productService$)
    console.log(this.cartProducts$);
  }
}
