import { Component, OnInit, signal } from '@angular/core';
import { ProductService } from '../../services/product.service';
import { Product } from '../../models/product';
import { Item } from '../../models/item';
import { Image } from '../../models/image';
import { CommonModule } from '@angular/common';
import { Observable } from 'rxjs';
import { CartService } from '../../services/cart.service';
import { RouterModule } from '@angular/router';

@Component({
  imports: [CommonModule,
  RouterModule],
  standalone: true,
  selector: 'product-tiles',
  templateUrl: './product-tile.component.html',
  styleUrl: './product-tile.component.css'
})

export class ProductTileComponent implements OnInit {
  public products$: Observable<Product[]> = new Observable<Product[]>;

  constructor(private productService: ProductService,
              private cartService: CartService) { }

  ngOnInit(): void {
    this.products$ = this.productService.getProducts()
  }

  public addProductToCart(product: Product): void {
    this.cartService.addProductToCart(product);
  }

  AddProduct(): void {
    console.log("a");
    this.productService.addProduct(new Product(
        5,
        "5",
        "lorum",
        "Ipsum",
        "ada",
        [new Item(1, 3)],
        [new Image(5, "5" + ".png", "afbeelding " + (5).toString())]
      ));
  }
}
