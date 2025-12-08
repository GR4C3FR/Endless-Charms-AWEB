import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-wedding-band-product6',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './product6.html',
  styleUrls: ['./product6.css'],
})
export class WeddingBandProduct6 {
  product = {
    id: 6,
    name: 'Hammered Gold Band',
    price: 950,
    image: 'hammered-gold-band.png',
    category: 'wedding-bands',
    inStock: true,
    label: 'Hammered Gold Band',
    src: '/hammered-gold-band',
    description: '18K gold band with a unique hammered finish for a rustic, artisanal look.',
    metalTypes: ['18K Yellow Gold', '14K White Gold', 'Platinum', 'Titanium'],
    finishTypes: ['Hammered', 'Polished', 'Satin', 'Matte'],
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
