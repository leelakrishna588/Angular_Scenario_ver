import { Component, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-super',
  templateUrl: './super.component.html',
  styleUrls: ['./super.component.css']
})
export class SuperComponent implements OnInit {
  public message='change of data';

  constructor() { }

  ngOnInit() {
  }

}
