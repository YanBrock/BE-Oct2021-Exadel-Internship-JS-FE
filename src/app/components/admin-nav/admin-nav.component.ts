import { Component, OnInit } from '@angular/core';
import { AdminService } from 'src/app/services/admin-service';
import { UserLoginService } from 'src/app/services/user-login.service';

@Component({
  selector: 'app-admin-nav',
  templateUrl: './admin-nav.component.html',
  styleUrls: ['./admin-nav.component.scss']
})
export class AdminNavComponent implements OnInit {

  selectedOption = "Home";
  displayComponent = "admin";


  constructor(private adminService: AdminService, private userLoginService: UserLoginService) {
    // this.displayComponent = this.userLoginService.getRole();
    this.displayComponent = this.userLoginService.activeUser.role;
    // this.userLoginService.userRole$.subscribe(role => {
    //   console.log(role)
    //   this.displayComponent = role;
    // });
  }


  changeWindow() {
    this.adminService.setSelectedPage(this.selectedOption);
  };


  ngOnInit(): void {};


}
