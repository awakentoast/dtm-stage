import { Component, OnInit, signal } from '@angular/core';
import { ProductService } from '../../services/product.service';
import { Product } from '../../models/product';
import { Item } from '../../models/item';
import { Image } from '../../models/image';
import { CommonModule } from '@angular/common';
import { Observable } from 'rxjs';

@Component({
  imports: [CommonModule],
  standalone: true,
  selector: 'product-tiles',
  templateUrl: './product-tile.component.html',
  styleUrl: './product-tile.component.css'
})

export class ProductTileComponent implements OnInit {
  public products$: Observable<Product[]> = new Observable<Product[]>;

  constructor(private productService: ProductService) { }

  ngOnInit(): void {
    // this.productService.subscribeToProducts({
    //   next: product => this.products.push(product),
    //   error: err => console.log(err),
    //   complete: () => console.log("observer completed"),
    // });

    this.products$ = this.productService.getProducts()
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
