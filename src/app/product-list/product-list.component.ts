import { products } from './../products';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  products = products;

  share() {
    window.alert('The product has been shares!');
  }

  onNotify() {
    window.alert('You will be notified whien the product goes on sale');
  }

}
