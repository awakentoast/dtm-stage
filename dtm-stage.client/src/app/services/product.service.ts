import { Injectable, signal } from '@angular/core';
import { Product } from '../models/product';
import { Item } from '../models/item';
import { Image } from '../models/image';
import { Observable, map, mergeAll, BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  private products$: BehaviorSubject<Product[]> = new BehaviorSubject<Product[]>([]);

  constructor() {
    this.productsMock();
  }

  public getProduct(productId: number): Observable<Product> {
    return this.products$.pipe(
      map(products => products.filter(product => product.id === productId)),
      mergeAll()
    );
  }

  public getProductIds(): Observable<number[]> {
    return this.products$.pipe(
      map(products => products.map(product => product.id))
    );
  }

  public getProducts(): Observable<Product[]> {
    return this.products$.asObservable();
  }

  public addProduct(product: Product): void {
    const products = this.products$.getValue();
    products.push(product);
    this.products$.next(products);
  }

  private productsMock(): void {  
    this.products$.next([0, 1, 2, 3, 4].map(
      i => new Product(
        i,
        i.toString(),
        "lorum",
        "Ipsum",
        "ada",
        [new Item(1, 3)],
        [new Image(i, i.toString() + ".png", "afbeelding " + (i).toString())]
      )));    
  }
}
