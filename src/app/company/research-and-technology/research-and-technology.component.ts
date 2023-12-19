import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-research-and-technology',
  templateUrl: './research-and-technology.component.html',
  styleUrls: ['./research-and-technology.component.css']
})
export class ResearchAndTechnologyComponent implements OnInit {

  constructor() { }
  LogInModalOpen = false;

  ngOnInit() {

  }


  backDropClicked(e: boolean) {
    this.LogInModalOpen = e
  }

  openModal() {
    this.LogInModalOpen = true;
  }


}
