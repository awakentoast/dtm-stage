import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CartPageProductOverviewComponent } from './cart-page-product-overview.component';

describe('CartPageProductOverviewComponent', () => {
  let component: CartPageProductOverviewComponent;
  let fixture: ComponentFixture<CartPageProductOverviewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CartPageProductOverviewComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CartPageProductOverviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
