import { Component, EventEmitter, Input, Output, OnInit } from '@angular/core';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css'],
})
export class CartComponent implements OnInit {
  @Input() items = ['item'];
  @Output() itemAdded = new EventEmitter<string>();
  newItem = '';

  constructor() {}
  ngOnInit(): void {}

  addItem() {
    this.itemAdded.emit(this.newItem);
    this.newItem = '';
  }
}
