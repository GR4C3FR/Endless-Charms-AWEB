import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-wedding-band-product1',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './product1.html',
  styleUrls: ['./product1.css'],
})
export class WeddingBandProduct1 {
  product = {
    id: 1,
    name: 'Classic Platinum Wedding Band',
    price: 1200,
    image: 'classic-platinum-wedding-band.png',
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
    console.log('Added to cart:', {
      product: this.product.name,
      metal: this.selectedMetal,
      finish: this.selectedFinish,
      width: this.selectedWidth,
      ringSize: this.selectedRingSize,
      quantity: this.quantity
    });
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
