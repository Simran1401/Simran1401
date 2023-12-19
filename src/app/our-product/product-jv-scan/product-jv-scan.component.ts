import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-product-jv-scan',
  templateUrl: './product-jv-scan.component.html',
  styleUrls: ['./product-jv-scan.component.css']
})
export class ProductJvScanComponent implements OnInit {

  constructor() { }

  LogInModalOpen = false

  ngOnInit(): void {
  }

  backDropClicked(e: boolean) {
    this.LogInModalOpen = e;
  }

  openModal() {
    this.LogInModalOpen = true;
  }

}
