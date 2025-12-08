import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { CommonModule, DecimalPipe } from '@angular/common';

@Component({
  selector: 'app-bracelets',
  standalone: true,
  imports: [RouterLink, CommonModule, DecimalPipe],
  templateUrl: './bracelets.html',
  styleUrls: ['./bracelets.css'],
})
export class Bracelets {

  braceletStyles = [
    { id: 1, name: '.30ct Tennis Bracelet', price: 149000, image: '30ct-tennis-bracelet.png', category: 'bracelets', inStock: true, label: '.30ct Tennis Bracelet', src: '/' }
  ];

}
