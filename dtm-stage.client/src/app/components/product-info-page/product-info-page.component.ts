import { Component, OnInit } from '@angular/core';
import { ProductService } from '../../services/product.service';
import { ActivatedRoute } from '@angular/router';
import { Image } from '../../models/image';
import { Product } from '../../models/product';
import { ScrollViewModule } from '@progress/kendo-angular-scrollview';
import { CommonModule } from '@angular/common';
import { EMPTY, filter, Observable } from 'rxjs';
@Component({
  standalone: true,
  imports: [
    ScrollViewModule,
    CommonModule
  ],
  templateUrl: './product-info-page.component.html',
  styleUrl: './product-info-page.component.css'
})
export class ProductInfoPageComponent implements OnInit {
  public product: Observable<Product> = EMPTY;

  constructor(private productService: ProductService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      const productIdString = params.get("id");
      console.log(productIdString);

      if (productIdString == null) {
        console.error("The URL should have contained an id");
      } else {
        const productId = parseInt(productIdString, 10);      
                
        this.product = this.productService.getProduct(productId);
      }
    });
  }
}
