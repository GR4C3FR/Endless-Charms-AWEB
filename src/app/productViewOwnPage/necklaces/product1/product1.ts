import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { CartService } from '../../../services/cart.service';
import { NotificationService } from '../../../services/notification.service';
import { Router } from '@angular/router';

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
    private notificationService: NotificationService,
    private router: Router
  ) {
    this.cartService.cart$.subscribe(() => {
      this.cartCount = this.cartService.getCartCount();
    });
  }

  product = {
    id: '1',
    name: '.30ct Tennis Necklace',
    price: 195000,
    image: '/30ct-tennis-necklace.png',
    src: '/30ct-tennis-necklace',
    category: 'necklaces',
    inStock: true,
    label: '.30ct Tennis Necklace',
    description: 'Delicate tennis necklace featuring a continuous line of brilliant cut stones set in a classic four-prong setting. Perfect for everyday elegance and special occasions.',
    metalTypes: ['18k Yellow Gold', '14k White Gold', '18k White Gold', 'Platinum'],
    stoneTypes: ['Natural Diamond', 'Lab-Grown Diamond', 'Moissanite', 'Signity Stone'],
    chainLengths: ['16in', '18in', '20in', '22in']
  };

  selectedMetal: string = this.product.metalTypes[0];
  selectedStone: string = this.product.stoneTypes[0];
  selectedLength: string = this.product.chainLengths[1];
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
    this.cartService.addToCart({
      id: this.product.id,
      name: this.product.name,
      price: this.product.price,
      image: this.product.image,
      metalType: this.selectedMetal,
      stone: this.selectedStone,
      chainLength: this.selectedLength
    });
    this.router.navigate(['/bag']);
  }

  incrementLength() {
    const currentIndex = this.product.chainLengths.indexOf(this.selectedLength);
    if (currentIndex < this.product.chainLengths.length - 1) {
      this.selectedLength = this.product.chainLengths[currentIndex + 1];
    }
  }

  decrementLength() {
    const currentIndex = this.product.chainLengths.indexOf(this.selectedLength);
    if (currentIndex > 0) {
      this.selectedLength = this.product.chainLengths[currentIndex - 1];
    }
  }

  openImagePopup() {
    this.showImagePopup = true;
  }

  closeImagePopup() {
    this.showImagePopup = false;
  }
}
