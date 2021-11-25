import { Component, OnInit } from '@angular/core';
import { AdminService } from 'src/app/services/admin-service';

@Component({
	selector: 'app-admin-nav',
	templateUrl: './admin-nav.component.html',
	styleUrls: ['./admin-nav.component.scss']
})
export class AdminNavComponent implements OnInit {

	selectedOption: string = "Home";
	displayComponent: string = "admin"
	

	constructor(private adminService: AdminService) { }

	changeWindow() {
		this.adminService.setSelectedPage(this.selectedOption);
	};

	ngOnInit(): void {
	};
}
