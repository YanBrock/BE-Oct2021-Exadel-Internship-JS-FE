import { Component, OnInit } from '@angular/core';
import { AdminService } from 'src/app/services/admin-service';

@Component({
  selector: 'app-search-candidate',
  templateUrl: './search-candidate.component.html',
  styleUrls: ['./search-candidate.component.scss']
})
export class SearchCandidateComponent implements OnInit {

	name: string;

  constructor(private adminService: AdminService) { }

  searchCandidate() {
	this.adminService.postSettingRequest(this.name, "admin/searchcandidates").subscribe(data => console.log(data));
  }

  ngOnInit(): void {
  }

}
