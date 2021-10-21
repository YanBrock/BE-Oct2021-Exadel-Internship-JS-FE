import { Component, Input, OnInit } from '@angular/core';
import { FormService } from '../services/form.service';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss'],
  providers: [FormService],
})
export class FormComponent implements OnInit {
  isSpecialisation: string[] = [];
  isEnglishlevel: string[] = [];
  isLocation: string[] = [];

  intern = {
    firstName: '',
    lastName: '',
    email: '',
    skype: '',
    phone: '',
    location: '',
    english: '',
    specialisation: '',
    checkbox: false
  };

  constructor(private formService: FormService) { }

  ngOnInit(): void {
    this.isSpecialisation = this.formService.isSpecialisation;
    this.isEnglishlevel = this.formService.isEnglishlevel;
    this.isLocation = this.formService.isLocation;
  }

  clickSubmit(internForm: any): void {
    console.log(internForm.valid)

    if (internForm.valid) {
      this.formService.saveDataIntern(this.intern);
      internForm.reset(" ");
    }
  }


}
