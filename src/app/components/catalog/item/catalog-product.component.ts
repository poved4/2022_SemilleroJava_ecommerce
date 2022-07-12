import { Component, Input } from '@angular/core';
import { Product } from 'src/app/models/product';
import { CartItem } from 'src/app/models/cart-item';
import { ShoppingCartService } from 'src/app/services/shopping-cart/shopping-cart.service';

@Component({
  selector: 'app-catalog-product',
  templateUrl: './catalog-product.component.html',
  styleUrls: ['./catalog-product.component.css']
})
export class CatalogProductComponent {

  @Input() product!: Product;
  constructor(private scService: ShoppingCartService) {}

  addToCart(): void {
    const cartItem = this.mapProductToCartItem(this.product);
    this.scService.addItem(cartItem);
  }

  mapProductToCartItem (product: Product): CartItem {
    const { id, imageUrl, name, price } = product;
    return { id, imageUrl, name, price };
  }

}
