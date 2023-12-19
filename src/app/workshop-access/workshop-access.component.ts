import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-workshop-access',
  templateUrl: './workshop-access.component.html',
  styleUrls: ['./workshop-access.component.css']
})
export class WorkshopAccessComponent implements OnInit {

  constructor() { }

  LogInModalOpen = false;

  ngOnInit() {
  }

  backDropClicked(e: boolean) {
    this.LogInModalOpen = e;
  }

  openModal() {
    this.LogInModalOpen = true;
  }

}
