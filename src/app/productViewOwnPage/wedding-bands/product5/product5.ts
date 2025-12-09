import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { CartService } from '../../../services/cart.service';
import { NotificationService } from '../../../services/notification.service';

@Component({
  selector: 'app-wedding-band-product5',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './product5.html',
  styleUrls: ['./product5.css'],
})
export class WeddingBandProduct5 {
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
    id: '5',
          name: 'Wedding Bands - Set E',
          price: 95000,
          image: 'Wedding Bands - Set E.png',
          category: 'wedding-bands',
          inStock: true,
          label: 'Classic Platinum Band',
          src: '/classic-platinum-band',
          description: 'Classic platinum band with a high-polish finish, perfect for a classic look.',
          metalTypes: ['Platinum', '18K Yellow Gold', '14K White Gold', 'Titanium'],
          finishTypes: ['Polished', 'Satin', 'Matte', 'Hammered'],
          widths: ['6mm', '5mm', '4mm'],
          ringSizes: ['8', '9', '10', '11', '12', '13', '14', '15']
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
