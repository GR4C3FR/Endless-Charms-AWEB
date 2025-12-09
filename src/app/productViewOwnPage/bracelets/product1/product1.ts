import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { CartService } from '../../../services/cart.service';
import { NotificationService } from '../../../services/notification.service';

@Component({
  selector: 'app-bracelet-product1',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './product1.html',
  styleUrls: ['./product1.css'],
})
export class BraceletProduct1 {
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
    name: '.30ct Tennis Bracelet',
    price: 149000,
    image: '/30ct-tennis-bracelet.png',
    src: '/30ct-tennis-bracelet',
    category: 'bracelets',
    inStock: true,
    label: '.30ct Tennis Bracelet',
    description: 'Elegant tennis bracelet featuring a continuous row of brilliant stones set in a classic prong setting. Comfortable, timeless, and perfect for gifting.',
    metalTypes: ['18k Yellow Gold', '14k White Gold', '18k White Gold', 'Platinum'],
    stoneTypes: ['Natural Diamond', 'Lab-Grown Diamond', 'Moissanite', 'Signity Stone'],
    lengths: ['6in', '6.5in', '7in', '7.5in', '8in']
  };

  selectedMetal: string = this.product.metalTypes[0];
  selectedStone: string = this.product.stoneTypes[0];
  selectedLength: string = this.product.lengths[2];
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
      chainLength: this.selectedLength
    });
    
    this.notificationService.showNotification(`${this.product.name} added to bag!`);
  }

  buyNow() {
    this.notificationService.showNotification('Redirecting to checkout...');
  }

  incrementLength() {
    const currentIndex = this.product.lengths.indexOf(this.selectedLength);
    if (currentIndex < this.product.lengths.length - 1) {
      this.selectedLength = this.product.lengths[currentIndex + 1];
    }
  }

  decrementLength() {
    const currentIndex = this.product.lengths.indexOf(this.selectedLength);
    if (currentIndex > 0) {
      this.selectedLength = this.product.lengths[currentIndex - 1];
    }
  }

  openImagePopup() {
    this.showImagePopup = true;
  }

  closeImagePopup() {
    this.showImagePopup = false;
  }
}
