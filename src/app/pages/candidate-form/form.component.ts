import { Component, OnInit } from '@angular/core';
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
    checkbox: true,
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

  clickSubmit(internForm: any): void {

      if (internForm.valid) {
        this.formService.saveDataIntern(this.intern);
        internForm.reset();
        internForm.valid = true;
      }


  }
}
