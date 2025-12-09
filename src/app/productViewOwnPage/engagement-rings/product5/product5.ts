import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { CartService } from '../../../services/cart.service';
import { NotificationService } from '../../../services/notification.service';

@Component({
  selector: 'app-product5',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './product5.html',
  styleUrls: ['./product5.css'],
})
export class Product5 {
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
    name: '1ct Oval-Cut Solitaire Ring',
    price: 32000,
    image: '1ct Oval-Cut Solitaire Ring.png',
    category: 'rings',
    inStock: true,
    label: '1ct Oval-Cut Solitaire Ring',
    description: 'An elongated oval-cut solitaire ring that creates an elegant and flattering appearance on the finger.',
    metalTypes: ['18k Yellow Gold', '14k Yellow Gold', '14k White Gold', '18k White Gold'],
    stoneTypes: ['Natural Diamond', 'Lab-Grown Diamond', 'Moissanite', 'Signity Stone'],
    caratSizes: ['1ct'],
    ringSizes: ['4', '5', '6', '7', '8', '9', '10', '11']
  };

  selectedMetal: string = this.product.metalTypes[0];
  selectedStone: string = this.product.stoneTypes[0];
  selectedCarat: string = this.product.caratSizes[0];
  selectedRingSize: string = this.product.ringSizes[3];
  quantity: number = 1;
  showImagePopup: boolean = false;

  addToCart() {
    this.cartService.addToCart({
      id: this.product.id,
      name: this.product.name,
      price: this.product.price,
      image: this.product.image,
      metalType: this.selectedMetal,
      stone: this.selectedStone,
      caratWeight: this.selectedCarat,
      ringSize: this.selectedRingSize
    });
    
    this.notificationService.showNotification(`${this.product.name} added to bag!`);
  }

  buyNow() {
    this.notificationService.showNotification('Redirecting to checkout...');
  }

  incrementCarat() {
    const currentIndex = this.product.caratSizes.indexOf(this.selectedCarat);
    if (currentIndex < this.product.caratSizes.length - 1) {
      this.selectedCarat = this.product.caratSizes[currentIndex + 1];
    }
  }

  decrementCarat() {
    const currentIndex = this.product.caratSizes.indexOf(this.selectedCarat);
    if (currentIndex > 0) {
      this.selectedCarat = this.product.caratSizes[currentIndex - 1];
    }
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

  openImagePopup() {
    this.showImagePopup = true;
  }

  closeImagePopup() {
    this.showImagePopup = false;
  }
}
