import { Component, computed, inject, input } from '@angular/core';
import { EcommerceStore } from '../../ecommerce-store';
import { Product } from '../../models/product';
import { MatIcon } from '@angular/material/icon';

@Component({
  selector: 'app-toggle-wishlist-button',
  imports: [MatIcon],
  template: `
    <button
      class="bg-white! shadow-lg rounded-md transition-all duration-200 hover:scale-110 hover:shadow-lg"
      matIconButton
      [class]="isInWishlist() ? 'text-red-500!' : 'text-gray-400!'"
      (click)="toggleWishlist(product())"
    >
      <mat-icon>{{ isInWishlist() ? 'favorite' : 'favorite_border' }}</mat-icon>
    </button>
  `,
  styles: ``,
})
export class ToggleWishlistButton {
  store = inject(EcommerceStore);
  product = input.required<Product>();
  isInWishlist = computed(() => this.store.wishlistItems().find((p) => p.id === this.product().id));
  toggleWishlist(product: Product) {
    if (this.isInWishlist()) {
      this.store.removeFromWishList(product);
    } else {
      this.store.addToWishlist(this.product());
    }
  }
}
