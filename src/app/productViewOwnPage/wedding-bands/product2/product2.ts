import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { CartService } from '../../../services/cart.service';
import { NotificationService } from '../../../services/notification.service';

@Component({
  selector: 'app-wedding-band-product2',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './product2.html',
  styleUrls: ['./product2.css'],
})
export class WeddingBandProduct2 {
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
    name: 'Wedding Bands - Set B',
    price: 70000,
    image: 'Wedding Bands - Set B.png',
    category: 'wedding-bands',
    inStock: true,
    label: 'Wedding Bands - Set B',
    src: '/wedding-bands-set-b',
    description: 'Durable titanium band with a smooth satin finish, ideal for active lifestyles.',
    metalTypes: ['18K Yellow Gold', '14K White Gold', 'Platinum', 'Titanium'],
    finishTypes: ['Matte', 'Polished', 'Hammered', 'Satin'],
    widths: ['4mm', '5mm', '6mm'],
    ringSizes: ['5', '6', '7', '8', '9', '10', '11', '12', '13']
  };

  selectedMetal: string = this.product.metalTypes[0];
  selectedFinish: string = this.product.finishTypes[0];
  selectedWidth: string = this.product.widths[0];
  selectedRingSize: string = this.product.ringSizes[0];
  quantity: number = 1;

  addToCart() {
    this.cartService.addToCart({
      id: this.product.id,
      name: this.product.name,
      price: this.product.price,
      image: this.product.image
    });
    
    this.notificationService.showNotification(`${this.product.name} added to bag!`);
  }

  incrementRingSize() {
    const currentIndex = this.product.ringSizes.indexOf(this.selectedRingSize);
    if (currentIndex < this.product.ringSizes.length - 1) {
      this.selectedRingSize = this.product.ringSizes[currentIndex + 1];
    }
  }

  decrementRingSize() {
    const currentIndex = this.product.ringSizes.indexOf(this.selectedRingSize);
    if (currentIndex > 0) {
      this.selectedRingSize = this.product.ringSizes[currentIndex - 1];
    }
  }
}
