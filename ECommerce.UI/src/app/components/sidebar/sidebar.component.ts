import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css'],
})
export class SidebarComponent implements OnInit {
  constructor() {}

  @Output() selectedProduct = new EventEmitter<string>();

  ngOnInit(): void {}

  // when a span containing the product name is pressed emit that value up to product details component
  setSelectedProduct(event: any) {
    let text = event.target.innerText;
    this.selectedProduct.emit(text.toLowerCase().replace(/ /g, ''));
  }
}
