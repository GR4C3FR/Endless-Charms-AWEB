import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { CartService } from '../services/cart.service';

@Component({
  selector: 'app-contact',
  imports: [RouterLink, FormsModule, CommonModule],
  templateUrl: './contact.html',
  styleUrl: './contact.css'
})
export class ContactComponent {
  cartCount = 0;
  showSuccessMessage = false;
  formData = {
    name: '',
    email: '',
    phone: '',
    comment: ''
  };

  constructor(private cartService: CartService) {
    this.cartService.cart$.subscribe(() => {
      this.cartCount = this.cartService.getCartCount();
    });
  }

  onSubmit() {
    // Show success message
    this.showSuccessMessage = true;

    // Clear form
    this.formData = {
      name: '',
      email: '',
      phone: '',
      comment: ''
    };

    // Hide message after 5 seconds
    setTimeout(() => {
      this.showSuccessMessage = false;
    }, 5000);
  }
}
