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
    { id: 1, name: 'Classic Platinum Wedding Band', price: 1200, image: 'classic-platinum-wedding-band.png', category: 'wedding-bands', inStock: true, label: 'Classic Platinum Wedding Band', src: '/classic-platinum-wedding-band' },
    { id: 2, name: 'Titanium Satin Band', price: 650, image: 'titanium-satin-band.png', category: 'wedding-bands', inStock: true, label: 'Titanium Satin Band', src: '/titanium-satin-band' },
    { id: 3, name: 'Rose Gold Matte Band', price: 900, image: 'rose-gold-matte-band.png', category: 'wedding-bands', inStock: true, label: 'Rose Gold Matte Band', src: '/rose-gold-matte-band' },
    { id: 4, name: 'White Gold Hammered Band', price: 1000, image: 'white-gold-hammered-band.png', category: 'wedding-bands', inStock: true, label: 'White Gold Hammered Band', src: '/white-gold-hammered-band' },
    { id: 5, name: 'Classic Platinum Band', price: 1200, image: 'classic-platinum-band.png', category: 'wedding-bands', inStock: true, label: 'Classic Platinum Band', src: '/classic-platinum-band' },
    { id: 6, name: 'Hammered Gold Band', price: 950, image: 'hammered-gold-band.png', category: 'wedding-bands', inStock: true, label: 'Hammered Gold Band', src: '/hammered-gold-band' },
    { id: 7, name: 'Matte White Gold Band', price: 800, image: 'matte-white-gold-band.png', category: 'wedding-bands', inStock: true, label: 'Matte White Gold Band', src: '/matte-white-gold-band' },
    { id: 8, name: 'Sculpted Edge Band', price: 1100, image: 'sculpted-edge-band.png', category: 'wedding-bands', inStock: true, label: 'Sculpted Edge Band', src: '/sculpted-edge-band' },
    { id: 9, name: 'Satin Finish Band', price: 850, image: 'satin-finish-band.png', category: 'wedding-bands', inStock: true, label: 'Satin Finish Band', src: '/satin-finish-band' }
  ];

}
