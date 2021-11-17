import { Component } from '@angular/core';
import { UserLoginService } from './services/user-login.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Exadel lerning center';
  user = "guest"; // recruiter || tech-interviewer || mentor || manager || admin

  constructor(private auth: UserLoginService) {

  }

  ngOnInit() {
    const potentialToken = localStorage.getItem('authToken');
    if (potentialToken !== null) {
      this.auth.setToken(potentialToken);
    }
  }

}
