import { Component, OnInit } from '@angular/core';
import { render } from 'creditcardpayments/creditCardPayments';
import { ShoppingCartService } from '../../services/shopping-cart/shopping-cart.service';
@Component({
  selector: 'app-paypal-buttons',
  templateUrl: './paypal-buttons.component.html',
  styleUrls: ['./paypal-buttons.component.css']
})
export class PaypalButtonsComponent implements OnInit {

  constructor(private shoppingcartService: ShoppingCartService) {

    const value = shoppingcartService.total;

    render ({
      id:"#paypalButtons",
      currency: "USD",
      value: value.toString(),
      onApprove(details) {
          alert('Sucessfull transaction');
          console.log(details);
      }
    });
   }

  ngOnInit(): void {
  }

}
