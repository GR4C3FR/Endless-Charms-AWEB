import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { CartService } from '../../../services/cart.service';
import { NotificationService } from '../../../services/notification.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-wedding-band-product4',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './product4.html',
  styleUrls: ['./product4.css'],
})
export class WeddingBandProduct4 {
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
    id: '4',
    name: 'Wedding Bands - Set D',
    price: 65000,
    image: 'Wedding Bands - Set D.png',
    category: 'wedding-bands',
    inStock: true,
    label: 'White Gold Hammered Band',
    src: '/white-gold-hammered-band',
    description: '14K white gold band with a hammered finish for a unique texture.',
    metalTypes: ['14K White Gold', '18K Yellow Gold', 'Platinum', 'Titanium'],
    finishTypes: ['Hammered', 'Polished', 'Satin', 'Matte'],
    widths: ['7mm', '6mm', '5mm'],
    ringSizes: ['8', '9', '10', '11', '12', '13', '14', '15']
  };

  selectedMetal: string = this.product.metalTypes[0];
  selectedFinish: string = this.product.finishTypes[0];
  selectedWidth: string = this.product.widths[0];
  selectedRingSize: string = this.product.ringSizes[0];
  quantity: number = 1;
  showImagePopup: boolean = false;

  addToCart() {
    this.cartService.addToCart({
      id: this.product.id,
      name: this.product.name,
      price: this.product.price,
      image: this.product.image,
      metalType: this.selectedMetal,
      finish: this.selectedFinish,
      width: this.selectedWidth,
      ringSize: this.selectedRingSize
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
    this.cartService.addToCart({
      id: this.product.id,
      name: this.product.name,
      price: this.product.price,
      image: this.product.image,
      metalType: this.selectedMetal,
      finish: this.selectedFinish,
      width: this.selectedWidth,
      ringSize: this.selectedRingSize
    });
    this.router.navigate(['/bag']);
  }

  openImagePopup() {
    this.showImagePopup = true;
  }

  closeImagePopup() {
    this.showImagePopup = false;
  }
}
