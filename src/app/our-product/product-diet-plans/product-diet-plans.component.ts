import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-product-diet-plans',
  templateUrl: './product-diet-plans.component.html',
  styleUrls: ['./product-diet-plans.component.css']
})
export class ProductDietPlansComponent implements OnInit {

  constructor() { }

  LogInModalOpen = false;

  ngOnInit() {
  }

  backDropClicked(e: boolean) {
    this.LogInModalOpen = e;
  }

  openModal() {
    this.LogInModalOpen = true
  }

}
