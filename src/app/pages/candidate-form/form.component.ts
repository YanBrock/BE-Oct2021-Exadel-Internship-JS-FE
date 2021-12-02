import { Component, OnInit } from '@angular/core';
import { NotificationService } from 'src/app/services/notification.service';
import { FormService } from '../../services/form.service';
import {Observable} from 'rxjs';
import {Candidate} from '../../types/candidate';
import {Store} from '@ngrx/store';
import {selectAllCountries, selectAllEnglishLevels, selectAllSpecializations} from '../../store/directory/selectors';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss'],
  providers: [FormService],
})
export class FormComponent implements OnInit {
  allSpecializations$: Observable<any[]>;
  allEnglishLevels$: Observable<any[]>;
  allCountries$: Observable<any[]>;
  // isSpecialization: string[];
  // isEnglishLevel: string[] = [];
  // isLocation: string[] = [];
  isLocationCity: string[] = [];
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
    englishLevel: '',
    specialization: '',
    checkbox: false,
    cv: null,
  };

  constructor(private formService: FormService, private notificationService: NotificationService, private store: Store) {
    this.allSpecializations$ = this.store.select(selectAllSpecializations);
    this.allEnglishLevels$ = this.store.select(selectAllEnglishLevels);
    this.allCountries$ = this.store.select(selectAllCountries);
  }

  ngOnInit(): void {
    // this.isSpecialization = this.formService.isSpecialization;
    // this.isEnglishLevel = this.formService.isEnglishLevel;
    // this.isLocation = this.formService.isLocation;
    this.isLocationCity = this.formService.isLocationCity;
  }

  stop(event: Event) {
    event.preventDefault();
  }

  csvInputChange(fileInputEvent: any) {
    console.log(fileInputEvent.target.files[0]);
    this.intern.cv = fileInputEvent.target.files[0];
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

        this.notificationService.success(`${this.intern.firstName} your form has been submitted!`);
        this.formService.saveDataIntern(this.intern);
        this.errorCheckBox = 'errorCheckBox';
        internForm.reset();
        internForm.setPristine();

      } else {

         this.notificationService.error('Oops, something went wrong!');
      }

    } else {
      this.errorCheckBox = 'errorCheckBox active';
    }
  }
}
