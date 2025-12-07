import { Routes } from '@angular/router';
import { Home } from './home/home';
import { About } from './about/about';
import { ContactComponent } from './contact/contact';
import { Cart } from './cart/cart';
import { ProductView } from './product-view/product-view';
import { EngagementRings } from './engagement-rings/engagement-rings';
import { WeddingBands } from './wedding-bands/wedding-bands';
import { Necklace } from './necklace/necklace';
import { Bracelets } from './bracelets/bracelets';
import { Earrings } from './earrings/earrings';

export const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: Home },
  { path: 'about', component: About },
  { path: 'contact', component: ContactComponent },
  { path: 'cart', component: Cart },
  { path: 'product/:id', component: ProductView },
  { path: 'engagement-rings', component: EngagementRings },
  { path: 'wedding-bands', component: WeddingBands },
  { path: 'necklace', component: Necklace },
  { path: 'bracelets', component: Bracelets },
  { path: 'earrings', component: Earrings }
];
