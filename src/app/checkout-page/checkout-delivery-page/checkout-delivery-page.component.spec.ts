import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CheckoutDeliveryPageComponent } from './checkout-delivery-page.component';

describe('CheckoutDeliveryPageComponent', () => {
  let component: CheckoutDeliveryPageComponent;
  let fixture: ComponentFixture<CheckoutDeliveryPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CheckoutDeliveryPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CheckoutDeliveryPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
