import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Exadel lerning center';
  user = "guest"; // отправная точка - от бэкенда сюда должен присваиваться итог проверки авторизации в приложении  (строка - recruter || interviewer || mentor || manager || admin)

  constructor(private translateService: TranslateService) {
    this.translateService.setDefaultLang('en');
  }

  ngOnInit() {
  }

  onClick() {
    const lang = this.translateService.currentLang === 'en' ? 'ru' : 'en';
    this.translateService.use(lang);
  }
}
