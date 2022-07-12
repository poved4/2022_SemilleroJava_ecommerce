import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

// Components
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { PaypalButtonsComponent } from './components/paypal-buttons/paypal-buttons.component';

// Modules
import { ShareModule } from './components/share/share.module';
import { CatalogModule } from './components/catalog/catalog.module';
import { ShoppingCartModule } from './components/shopping-cart/shopping-cart.module';

@NgModule({
  declarations: [
    AppComponent,
    PaypalButtonsComponent
  ],
  imports: [
    ShareModule,
    CatalogModule,
    BrowserModule,
    AppRoutingModule,
    ShoppingCartModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
