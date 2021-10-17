import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent implements OnInit {

  firstName = ""
  lastName = ""
  email = ""
  skype = ""
  phone = ""

  intern={}


  constructor() { }

  ngOnInit(): void {
  }

  clickSubmit(event:Event): void {
    event.preventDefault()
    this.intern = {
      firstName: this.firstName,
      lastName: this.lastName,
      email: this.email,
      skype: this.skype,
      phone: this.phone
    }
    console.log(this.intern)
    this.firstName = ""
    this.lastName = ""
    this.email = ""
    this.skype = ""
    this.phone = ""
  }

}
