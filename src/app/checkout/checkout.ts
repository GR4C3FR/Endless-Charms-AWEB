import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';
import { CartService } from '../services/cart.service';

@Component({
  selector: 'app-checkout',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterLink],
  templateUrl: './checkout.html',
  styleUrls: ['./checkout.css']
})
export class CheckoutComponent {
  paymentMethod = 'bank-transfer';
  formData = {
    country: '',
    firstName: '',
    lastName: '',
    address: '',
    postalCode: '',
    city: '',
    social: '',
    phone: ''
  };
  items = [];
  cartCount = 0;

  constructor(public cartService: CartService) {
    this.cartService.cart$.subscribe(() => {
      this.cartCount = this.cartService.getCartCount();
    });
  }

  completeOrder() {
    // Redirect to checkout (refresh page) after order completion
    window.location.href = '/checkout';
  }
}