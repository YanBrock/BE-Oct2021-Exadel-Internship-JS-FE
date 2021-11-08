import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { UserLoginService } from 'src/app/services/user-login.service';




@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  selectedLanguage: string = 'en'

  languageOptions = [
    { label: 'English', value: 'en' },
    { label: 'Russian', value: 'ru' },
  ];

  constructor(private translateService: TranslateService, private _userLoginService: UserLoginService) {
    this.translateService.setDefaultLang(this.selectedLanguage);
  }

  ngOnInit() {
    this.translateService.use(this.selectedLanguage);
  }

  changeLanguage(language) {
    this.translateService.use(language)
  }

}
