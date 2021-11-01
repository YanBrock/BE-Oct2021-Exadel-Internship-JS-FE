import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header-user-name',
  templateUrl: './header-user-name.component.html',
  styleUrls: ['./header-user-name.component.scss']
})
export class HeaderUserNameComponent implements OnInit {

	title: string;

  constructor() { }

  ngOnInit(): void {
	console.log(this.title);
  }

}
