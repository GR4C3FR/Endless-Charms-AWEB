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
    { id: 1, name: 'Wedding Bands - Set A', price: 110000, image: 'Wedding Bands - Set A.png', category: 'wedding-bands', inStock: true, label: 'Wedding Bands - Set A', src: '/classic-platinum-wedding-band' },
    { id: 2, name: 'Wedding Bands - Set B', price: 70000, image: 'Wedding Bands - Set B.png', category: 'wedding-bands', inStock: true, label: 'Wedding Bands - Set B', src: '/titanium-satin-band' },
    { id: 3, name: 'Wedding Bands - Set C', price: 62000, image: 'Wedding Bands - Set C.png', category: 'wedding-bands', inStock: true, label: 'Wedding Bands - Set C', src: '/rose-gold-matte-band' },
    { id: 4, name: 'Wedding Bands - Set D', price: 65000, image: 'Wedding Bands - Set D.png', category: 'wedding-bands', inStock: true, label: 'Wedding Bands - Set D', src: '/white-gold-hammered-band' },
    { id: 5, name: 'Wedding Bands - Set E', price: 95000, image: 'Wedding Bands - Set E.png', category: 'wedding-bands', inStock: true, label: 'Wedding Bands - Set E', src: '/classic-platinum-band' },
    { id: 6, name: 'Wedding Bands - Set F', price: 42000, image: 'Wedding Bands - Set F.png', category: 'wedding-bands', inStock: true, label: 'Wedding Bands - Set F', src: '/hammered-gold-band' },
    { id: 7, name: 'Wedding Bands - Set G', price: 95000, image: 'Wedding Bands - Set G.png', category: 'wedding-bands', inStock: true, label: 'Wedding Bands - Set G', src: '/matte-white-gold-band' },
    { id: 8, name: 'Wedding Bands - Set H', price: 42000, image: 'Wedding Bands - Set H.png', category: 'wedding-bands', inStock: true, label: 'Wedding Bands - Set H', src: '/sculpted-edge-band' },
    { id: 9, name: 'Wedding Bands - Set I', price: 72000, image: 'Wedding Bands - Set I.png', category: 'wedding-bands', inStock: true, label: 'Wedding Bands - Set I', src: '/satin-finish-band' }
  ];

}
