import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { CartService } from '../../../services/cart.service';
import { NotificationService } from '../../../services/notification.service';

@Component({
  selector: 'app-earring-product2',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './product2.html',
  styleUrls: ['./product2.css'],
})
export class EarringProduct2 {
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
    id: '2',
    name: 'Cluster Set',
    price: 245000,
    image: 'Cluster Set.png',
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
