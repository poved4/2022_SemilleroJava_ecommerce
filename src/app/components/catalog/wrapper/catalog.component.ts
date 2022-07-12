import { Component } from '@angular/core';
import { Product } from 'src/app/models/product';
import { CatalogService } from 'src/app/services/catalog/catalog.service';

@Component({
  selector: 'app-catalog',
  templateUrl: './catalog.component.html',
  styleUrls: ['./catalog.component.css']
})
export class CatalogComponent {

  get products(): Product[] {
    return this.catalogService.products;
  }
  
  constructor(private catalogService: CatalogService) {}

}
