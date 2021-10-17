import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  clickSubmit(event:Event): void {
    event.preventDefault()
    console.log(event)
    console.log(event)
  }

}
