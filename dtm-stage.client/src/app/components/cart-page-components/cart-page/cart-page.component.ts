import { Component } from '@angular/core';
import { CartPageProductOverviewComponent } from '../cart-page-product-overview/cart-page-product-overview.component';
import { ReservationCalendarComponent } from '../reservation-calendar/reservation-calendar.component';
import { CartService } from '../../../services/cart.service';

@Component({
  selector: 'app-cart-page',
  standalone: true,
  imports: [CartPageProductOverviewComponent,
    ReservationCalendarComponent],
  templateUrl: './cart-page.component.html',
  styleUrl: './cart-page.component.css'
})
export class CartPageComponent {
  constructor(private cartProduct: CartPageProductOverviewComponent, 
              private reservationCalendar: ReservationCalendarComponent,
              private cartService: CartService) {
  }
}
