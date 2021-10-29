import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';



@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  lang: string = 'en'

  constructor(private translateService: TranslateService) {
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
