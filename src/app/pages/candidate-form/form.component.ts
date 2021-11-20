import { Component, OnInit } from '@angular/core';
import { FormService } from '../../services/form.service';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss'],
  providers: [FormService],
})
export class FormComponent implements OnInit {
  isSpecialization : string[];
  isEnglishLevel: string[] = [];
  // isLocation: string[] = [];
  // isLocationCity: string[] = [];
  validEmail = '^([a-z0-9_-]+\.)*[a-z0-9_-]+@[a-z0-9_-]+(\.[a-z0-9_-]+)*\.[a-z]{2,6}$';
  errorCheckBox = 'errorCheckBox';
  isCloseTermsClass = 'wrapper_terms disable';

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

  constructor(private formService: FormService) { }

  ngOnInit(): void {
    this.isSpecialization = this.formService.isSpecialization;
    this.isEnglishLevel = this.formService.isEnglishLevel;
    // this.isLocation = this.formService.isLocation;
    // this.isLocationCity = this.formService.isLocationCity;
  }

  csvInputChange(fileInputEvent: any) {
    console.log(fileInputEvent.target.files[0]);
  }

  closeTerms() {
    this.isCloseTermsClass === 'wrapper_terms' ?
      this.isCloseTermsClass = 'wrapper_terms disable' :
      this.isCloseTermsClass = 'wrapper_terms';
  }

  toggleClassCheckBox(event) {
    if (event.target.className === 'linkCheckBox') {
      this.closeTerms();
    } else {
      this.intern.checkbox ?
        this.errorCheckBox = 'errorCheckBox active' :
        this.errorCheckBox = 'errorCheckBox';
    }
  }

  clickSubmit(internForm: any): void {
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
