import { Component, OnInit } from '@angular/core';
// import * as internal from 'stream';
import { FormService } from '../../services/form.service';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss'],
  providers: [FormService],
})
export class FormComponent implements OnInit {
  isSpecialization: string[] = [];
  isEnglishlevel: string[] = [];
  isLocation: string[] = [];
  isLocationCity: string[] = [];
  validEmail = '^([a-z0-9_-]+\.)*[a-z0-9_-]+@[a-z0-9_-]+(\.[a-z0-9_-]+)*\.[a-z]{2,6}$';
  errorCheckBox = 'errorCheckBox';

  intern = {
    firstName: '',
    lastName: '',
    email: '',
    skype: '',
    phone: '',
    location: '',
    city: '',
    english: '',
    specialization: '',
    checkbox: false,
  };

  constructor(private formService: FormService) {}

  ngOnInit(): void {
    this.isSpecialization = this.formService.isSpecialization;
    this.isEnglishlevel = this.formService.isEnglishlevel;
    this.isLocation = this.formService.isLocation;
    this.isLocationCity = this.formService.isLocationCity;
  }

  csvInputChange(fileInputEvent: any) {
    console.log(fileInputEvent.target.files[0]);
  }

  toggleClassCheckBox() {
    this.intern.checkbox ?
      this.errorCheckBox = 'errorCheckBox active' :
      this.errorCheckBox = 'errorCheckBox';
  }

  clickSubmit(internForm: any): void {
    console.log(internForm)

    if (this.intern.checkbox) {
      if (internForm.valid) {
        this.formService.saveDataIntern(this.intern);
        internForm.reset();
        this.errorCheckBox = 'errorCheckBox';

        internForm.submitted = false;
        internForm.$setPristine();

      }
    } else {
      this.errorCheckBox = 'errorCheckBox active';
    }
  }
}
