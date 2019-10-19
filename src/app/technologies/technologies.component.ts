import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-technologies',
  templateUrl: './technologies.component.html',
  styleUrls: ['./technologies.component.scss']
})
export class TechnologiesComponent implements OnInit {
  data:Array<string>=["html","css","Javascript","Angular8","bootstrap","JQuery","React js"]

  constructor() { }

  ngOnInit() {
  }

}
