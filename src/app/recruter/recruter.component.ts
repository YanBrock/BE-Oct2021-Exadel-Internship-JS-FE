import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-recruter',
  templateUrl: './recruter.component.html',
  styleUrls: ['./recruter.component.scss']
})
export class RecruterComponent implements OnInit {

	recruter = "Hi! I'm Recruter :)";

  constructor() { }

  ngOnInit(): void {
  }

}
