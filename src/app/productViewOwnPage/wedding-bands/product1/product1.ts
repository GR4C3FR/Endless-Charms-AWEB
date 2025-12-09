import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { CartService } from '../../../services/cart.service';
import { NotificationService } from '../../../services/notification.service';

@Component({
  selector: 'app-wedding-band-product1',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './product1.html',
  styleUrls: ['./product1.css'],
})
export class WeddingBandProduct1 {
  cartCount = 0;
  showImagePopup: boolean = false;

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
    name: 'Wedding Bands - Set A',
    price: 110000,
    image: 'Wedding Bands - Set A.png',
    category: 'wedding-bands',
    inStock: true,
    label: 'Classic Platinum Wedding Band',
      src: '/classic-platinum-wedding-band',
      description: 'Timeless platinum band with a high-polish finish, perfect for a classic look.',
      metalTypes: ['Platinum', '18K Yellow Gold', '14K White Gold', 'Titanium'],
      finishTypes: ['Polished', 'Satin', 'Matte', 'Hammered'],
      widths: ['6mm', '5mm', '4mm'],
    ringSizes: ['6', '7', '8', '9', '10', '11', '12']
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
  buyNow() {
    this.notificationService.showNotification('Redirecting to checkout...');
  }

  openImagePopup() {
    this.showImagePopup = true;
  }

  closeImagePopup() {
    this.showImagePopup = false;
  }
}
