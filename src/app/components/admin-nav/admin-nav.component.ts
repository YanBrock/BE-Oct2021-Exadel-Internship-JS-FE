import { Component, OnInit } from '@angular/core';
import { Observer } from 'rxjs';
import { AdminService } from 'src/app/services/admin-service';

@Component({
	selector: 'app-admin-nav',
	templateUrl: './admin-nav.component.html',
	styleUrls: ['./admin-nav.component.scss']
})
export class AdminNavComponent implements OnInit {

	selectedOption: string = "Home";

	qwe: any;


	constructor(private adminService: AdminService) {

	}

	changeWindow() {
		this.adminService.setSelectPage(this.selectedOption);
	};

	ngOnInit(): void {
	};
}
