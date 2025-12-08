import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { CommonModule, DecimalPipe } from '@angular/common';

@Component({
  selector: 'app-necklace',
  standalone: true,
  imports: [RouterLink, CommonModule, DecimalPipe],
  templateUrl: './necklace.html',
  styleUrls: ['./necklace.css'],
})
export class Necklace {

  necklaceStyles = [
    { id: 1, name: 'Classic Pendant Necklace', price: 8500, image: 'classic-pendant-necklace.png', category: 'necklaces', inStock: true, label: 'Classic Pendant Necklace', src: '/' },
    { id: 2, name: 'Infinity Heart Necklace', price: 9800, image: 'infinity-heart-necklace.png', category: 'necklaces', inStock: true, label: 'Infinity Heart Necklace', src: '/' },
    { id: 3, name: 'Solitaire Diamond Necklace', price: 15000, image: 'solitaire-diamond-necklace.png', category: 'necklaces', inStock: true, label: 'Solitaire Diamond Necklace', src: '/' },
    { id: 4, name: 'Bar Necklace', price: 7200, image: 'bar-necklace.png', category: 'necklaces', inStock: true, label: 'Bar Necklace', src: '/' },
    { id: 5, name: 'Nameplate Necklace', price: 6400, image: 'nameplate-necklace.png', category: 'necklaces', inStock: true, label: 'Nameplate Necklace', src: '/' },
    { id: 6, name: 'Lariat Necklace', price: 11200, image: 'lariat-necklace.png', category: 'necklaces', inStock: true, label: 'Lariat Necklace', src: '/' },
    { id: 7, name: 'Pearl Drop Necklace', price: 12500, image: 'pearl-drop-necklace.png', category: 'necklaces', inStock: true, label: 'Pearl Drop Necklace', src: '/' },
    { id: 8, name: 'Charm Necklace', price: 5400, image: 'charm-necklace.png', category: 'necklaces', inStock: true, label: 'Charm Necklace', src: '/' },
    { id: 9, name: 'Layered Set', price: 15800, image: 'layered-set-necklace.png', category: 'necklaces', inStock: true, label: 'Layered Set', src: '/' }
  ];

}
