import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-wedding-bands',
  standalone: true,
  imports: [RouterLink, CommonModule],
  templateUrl: './wedding-bands.html',
  styleUrls: ['./wedding-bands.css'],
})
export class WeddingBands {

    weddingBandsStyles = [
    { id: 1, name: '1ct Round-Cut Solitaire Ring', price: 32000, image: '1ct-round-cut-solitaire-ring.png', category: 'rings', inStock: true, label: '1ct Round-Cut Solitaire Ring', src: '/' },
    { id: 2, name: '1ct Princess-Cut Solitaire Ring', price: 32000, image: '1ct-princess-cut-solitaire-ring.png', category: 'rings', inStock: true, label: '1ct Princess-Cut Solitaire Ring', src: '/' },
    { id: 3, name: '1ct Cushion-Cut Solitaire Ring', price: 32000, image: '1ct-cushion-cut-solitaire-ring.png', category: 'rings', inStock: true, label: '1ct Cushion-Cut Solitaire Ring', src: '/' },
    { id: 4, name: '1ct Radiant-Cut Solitaire Ring', price: 32000, image: '1ct-radiant-cut-solitaire-ring.png', category: 'rings', inStock: true, label: '1ct Radiant-Cut Solitaire Ring', src: '/' },
    { id: 5, name: '1ct Oval-Cut Solitaire Ring', price: 32000, image: '1ct-oval-cut-solitaire-ring.png', category: 'rings', inStock: true, label: '1ct Oval-Cut Solitaire Ring', src: '/' },
    { id: 6, name: '1ct Emerald-Cut Solitaire Ring', price: 32000, image: '1ct-emerald-cut-solitaire-ring.png', category: 'rings', inStock: true, label: '1ct Emerald-Cut Solitaire Ring', src: '/' },
    { id: 7, name: '1ct Heart-Cut Solitaire Ring', price: 32000, image: '1ct-heart-cut-solitaire-ring.png', category: 'rings', inStock: true, label: '1ct Heart-Cut Solitaire Ring', src: '/' },
    { id: 8, name: '1ct Pear-Cut Solitaire Ring', price: 32000, image: '1ct-pear-cut-solitaire-ring.png', category: 'rings', inStock: true, label: '1ct Pear-Cut Solitaire Ring', src: '/' },
    { id: 9, name: '1ct Assher-Cut Solitaire Ring', price: 32000, image: '1ct-assher-cut-solitaire-ring.png', category: 'rings', inStock: true, label: '1ct Assher-Cut Solitaire Ring', src: '/' }
  ];

}
