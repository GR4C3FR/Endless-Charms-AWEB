import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-wedding-band-product9',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './product9.html',
  styleUrls: ['./product9.css'],
})
export class WeddingBandProduct9 {
  product = {
    id: 9,
    name: 'Satin Finish Band',
    price: 850,
    image: 'satin-finish-band.png',
    category: 'wedding-bands',
    inStock: true,
    label: 'Satin Finish Band',
    src: '/satin-finish-band',
    description: 'Satin finish band in gold for a soft, elegant look.',
    metalTypes: ['18K Yellow Gold', '14K White Gold', 'Platinum', 'Titanium'],
    finishTypes: ['Satin', 'Polished', 'Matte', 'Hammered'],
    widths: ['7mm', '6mm', '5mm'],
    ringSizes: ['8', '9', '10', '11', '12', '13', '14', '15']
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
