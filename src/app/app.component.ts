import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Exadel lerning center (FE)';

  user = "developer"; // отправная точка - от бэкенда сюда должен присваиваться итог проверки авторизации в приложении  (строка - recruter || interviewer || mentor || manager || admin)

  constructor() 
  {

  }
}
