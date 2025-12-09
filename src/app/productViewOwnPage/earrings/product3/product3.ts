import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { CartService } from '../../../services/cart.service';
import { NotificationService } from '../../../services/notification.service';

@Component({
  selector: 'app-earring-product3',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './product3.html',
  styleUrls: ['./product3.css'],
})
export class EarringProduct3 {
  cartCount = 0;

  constructor(
    private cartService: CartService,
    private notificationService: NotificationService
  ) {
    this.cartService.cart$.subscribe(() => {
      this.cartCount = this.cartService.getCartCount();
    });
  }

  product = {
    id: '3',
    name: 'Oval - Cut Green Emerald Earrings',
    price: 42000,
    image: 'Oval - Cut Green Emerald Earrings.png',
    inStock: true,
  };

  addToCart() {
    this.cartService.addToCart({
      id: this.product.id,
      name: this.product.name,
      price: this.product.price,
      image: this.product.image
    });
    
    this.notificationService.showNotification(`${this.product.name} added to bag!`);
  }
}
