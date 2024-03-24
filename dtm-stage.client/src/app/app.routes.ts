import { Routes } from '@angular/router';
import { ProductTileComponent } from './components/product-tile/product-tile.component';
import { ProductInfoPageComponent } from './components/product-info-page/product-info-page.component';
import { CartPageComponent } from './components/cart-page/cart-page.component';

export const routes: Routes = [
    {path: "", component: ProductTileComponent},
    {path: "product/:id", component: ProductInfoPageComponent},
    {path: "cart-page", component: CartPageComponent},
];
