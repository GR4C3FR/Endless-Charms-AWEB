# Endless Charms - Angular Jewelry E-Commerce Website

## Project Overview
A multi-page Angular web application for a jewelry company featuring modern web development practices, data binding techniques, and Angular directives.

## Angular Features Implemented

### ✅ Data Binding Techniques
1. **Property Binding** - `[src]`, `[alt]`, `[class.active]`, `[disabled]`
2. **Event Binding** - `(click)`, event handlers for user interactions
3. **Two-way Binding** - Component data updates
4. **Interpolation** - `{{ product.name }}`, `{{ product.price }}`

### ✅ Angular Directives
1. **@for Directive** - Used for:
   - Product listings (Top-Selling Pieces)
   - Hero carousel slides
   - Ring styles grid
   - Feature cards
   - Review stars

2. **@if/@else Directives** - Used for:
   - Stock availability display
   - "View More" / "Show Less" toggle
   - Conditional rendering of product actions

### Key Components

#### Home Component (`home/`)
- Hero carousel with image slides
- Top-selling products grid with @for loop
- Engagement rings section
- Features showcase
- Customer reviews
- Complete footer

**Data Structures:**
- `Product[]` - Product listings with stock management
- `Feature[]` - Company features
- `RingStyle[]` - Different ring cut styles
- `heroSlides[]` - Carousel content

**Methods:**
- `nextSlide()` / `prevSlide()` - Carousel navigation
- `goToSlide(index)` - Direct slide selection
- `toggleProducts()` - Show more/less products
- `addToCart(product)` - Cart functionality
- `addToWishlist(product)` - Wishlist management

## Project Structure

```
src/
├── app/
│   ├── home/           # Landing page with full jewelry showcase
│   ├── shop/           # Product listing page
│   ├── about/          # About company
│   ├── contact/        # Contact form
│   ├── cart/           # Shopping cart
│   ├── product-view/   # Individual product details
│   └── app.routes.ts   # Route configuration
└── assets/             # Images and static files
```

## Routes Configuration
- `/` - Redirects to /home
- `/home` - Landing page
- `/shop` - Shop page
- `/about` - About page
- `/contact` - Contact page
- `/cart` - Shopping cart
- `/product/:id` - Product details

## Technologies Used
- **Angular 21** - Frontend framework
- **TypeScript** - Programming language
- **CSS3** - Styling
- **RouterModule** - Navigation
- **Reactive patterns** - State management

## Development

### Run Development Server
```bash
cd company-website
ng serve
```
Navigate to `http://localhost:4200/`

### Build for Production
```bash
ng build --configuration production
```

### Deploy to Netlify
1. Push code to GitHub repository
2. Connect repository to Netlify
3. Netlify will automatically deploy using `netlify.toml` configuration

## Features to Add (Future Enhancements)

1. **Backend Integration**
   - Connect to a real database
   - Product management API
   - User authentication

2. **Shopping Cart**
   - Add/remove items
   - Update quantities
   - Checkout process

3. **User Authentication**
   - Login/Signup forms
   - User profiles
   - Order history

4. **Search & Filters**
   - Search products
   - Filter by category, price, etc.
   - Sort options

5. **Product Images**
   - Replace placeholder images with real jewelry photos
   - Add to `src/assets/` folder

## Notes for Images
Current implementation uses placeholder image paths. To add real images:
1. Add images to `src/assets/` folder
2. Update image paths in `home.ts`:
   - Ring images: `assets/ring1.jpg`, `assets/ring2.jpg`, etc.
   - Band images: `assets/band1.jpg`, `assets/band2.jpg`, etc.
   - Earring images: `assets/earring1.jpg`, etc.
   - Other jewelry: `assets/bracelet1.jpg`, `assets/necklace1.jpg`, etc.

## Angular Directives Showcase

### @for Example
```typescript
@for (product of getDisplayedProducts(); track product.id) {
  <div class="product-card">
    <h3>{{ product.name }}</h3>
    <p>₱{{ product.price | number }}</p>
  </div>
}
```

### @if/@else Example
```typescript
@if (product.inStock) {
  <span class="stock-badge in-stock">View Details</span>
} @else {
  <span class="stock-badge out-stock">Out of Stock</span>
}
```

## Author
Created for AWEB Prelim Project
