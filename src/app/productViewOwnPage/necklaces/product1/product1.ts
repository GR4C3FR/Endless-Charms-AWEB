import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { CartService } from '../../../services/cart.service';
import { NotificationService } from '../../../services/notification.service';

@Component({
  selector: 'app-necklace-product1',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './product1.html',
  styleUrls: ['./product1.css'],
})
export class NecklaceProduct1 {
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
    id: '1',
    name: '.30ct Tennis Necklace',
    price: 195000,
    image: '30ct-tennis-necklace.png',
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
