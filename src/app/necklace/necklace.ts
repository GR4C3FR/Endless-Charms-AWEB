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
    { id: 1, name: '.30ct Tennis Necklace', price: 195000, image: '30ct-tennis-necklace.png', category: 'necklaces', inStock: true, label: '.30ct Tennis Necklace', src: '/' }
  ];

}
