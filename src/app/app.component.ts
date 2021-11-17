import { Component } from '@angular/core';
import { UserLoginService } from './services/user-login.service';
import jwt_decode from 'jwt-decode';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Exadel lerning center';
  user = "guest"; // recruiter || tech-interviewer || mentor || manager || admin
  isKeyRole = 'http://schemas.microsoft.com/ws/2008/06/identity/claims/role';
  decoded: any;


  constructor(private auth: UserLoginService) {

  }

  ngOnInit() {
    const potentialToken = localStorage.getItem('authToken');
    if (potentialToken !== null) {
      this.decoded = jwt_decode(potentialToken);
      this.auth.setReloadRole(this.decoded[this.isKeyRole]);
    }
  }

}
