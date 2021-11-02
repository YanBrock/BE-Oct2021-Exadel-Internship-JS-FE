import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { UserLoginService } from 'src/app/services/user-login.service';




@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  lang: string = 'en'

  constructor(private translateService: TranslateService, private _userLoginService: UserLoginService) {
    this.translateService.setDefaultLang(this.lang);
  }

  ngOnInit() {
    this.translateService.use(this.lang);
  }

  onClick() {
    this.lang = this.translateService.currentLang === 'en' ? 'ru' : 'en';
    this.translateService.use(this.lang);
  }
}
