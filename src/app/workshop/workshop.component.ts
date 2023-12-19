import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-workshop',
  templateUrl: './workshop.component.html',
  styleUrls: ['./workshop.component.css']
})
export class WorkshopComponent implements OnInit {


  // slideConfig = {
  //   "slidesToShow": 3,
  //   "slidesToScroll": 1,
  //   "nextArrow": "<svg xmlns='http://www.w3.org/2000/svg' width='150' fill='currentColor' class='bi bi-chevron-compact-right purple-arrow' style='cursor: pointer' viewBox='0 0 16 16'><path fill-rule='evenodd' d='M6.776 1.553a.5.5 0 0 1 .671.223l3 6a.5.5 0 0 1 0 .448l-3 6a.5.5 0 1 1-.894-.448L9.44 8 6.553 2.224a.5.5 0 0 1 .223-.671z'/></svg>",
  //   "prevArrow": "<svg xmlns='http://www.w3.org/2000/svg' width='150' fill='currentColor' class='bi bi-chevron-compact-left purple-arrow' style='cursor: pointer' viewBox='0 0 16 16'><path fill-rule='evenodd' d='M9.224 1.553a.5.5 0 0 1 .223.67L6.56 8l2.888 5.776a.5.5 0 1 1-.894.448l-3-6a.5.5 0 0 1 0-.448l3-6a.5.5 0 0 1 .67-.223z'/></svg>",
  //   "responsive": [
  //     {
  //       breakpoint: 767,
  //       settings: {
  //         slidesToShow: 1,
  //         slideToScroll: 1
  //       }
  //     }
  //   ]
  // };
  constructor() { }

  ngOnInit(): void {
  }

}
