import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-mycomponent',
  templateUrl: './mycomponent.page.html',
  styleUrls: ['./mycomponent.page.scss'],
})
export class MycomponentPage implements OnInit {

  title="Blank component"
  constructor() { }

  ngOnInit() {
  }

}
