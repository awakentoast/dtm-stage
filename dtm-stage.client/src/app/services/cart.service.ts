import { Injectable } from '@angular/core';
import { ProductService } from './product.service';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  private cart: Map<number, number>;

  constructor(private productService: ProductService) {
    this.cart = this.createEmptyCart();
  }

  public addProductToCart(productId: number) {
    let prev = this.cart.get(productId);
    if (prev == undefined) {
      console.error(productId + " should have been present in cart.")
      prev = 0;
    }
    this.cart.set(productId, prev + 1)
  }

  private createEmptyCart(): Map<number, number> {
    const productIds: number[] = this.productService.getProductIds();

    const cart: Map<number, number> = new Map(
        productIds.map(productId => [productId, 0])
      );

    return cart;
  }
}
