import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Product } from '../models/product';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  private cartProducts$ = new BehaviorSubject<Map<Product, number>>(new Map()); 
  
  public getProductsInCart(): Observable<Map<Product, number>> {
    console.log(this.cartProducts$)
    return this.cartProducts$.asObservable();
  }

  public addProductToCart(product: Product): void {
    const cartProducts = this.cartProducts$.getValue();
    const currentAmountOfproductInCart: number | undefined = cartProducts.get(product);
    if (currentAmountOfproductInCart != undefined) {
      cartProducts.set(product, currentAmountOfproductInCart + 1)
    } else {
      cartProducts.set(product, 1)
    }
    console.log(this.cartProducts$)
  }

  public removeProductFromCart(product: Product): void {
    const cartProducts = this.cartProducts$.getValue();
    const currentAmountOfproductInCart: number | undefined = cartProducts.get(product);
    if (currentAmountOfproductInCart != undefined) {
      if (currentAmountOfproductInCart == 1) {
        cartProducts.delete(product);
      } else {
        cartProducts.set(product, currentAmountOfproductInCart - 1);
      }
    } else {
      console.error("trying to delete product that is currently not in cart");
    }
    console.log(this.cartProducts$)
  }
}
