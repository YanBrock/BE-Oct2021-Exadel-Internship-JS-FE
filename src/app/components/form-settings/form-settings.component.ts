import { Component, QueryList, ViewChildren } from '@angular/core';
import { AdminService } from 'src/app/services/admin-service';
import { FormService } from '../../services/form.service';


@Component({
  selector: 'app-form-settings',
  templateUrl: './form-settings.component.html',
  styleUrls: ['./form-settings.component.scss'],
  providers: [FormService, AdminService],
})
export class FormSettingsComponent {

  // @ViewChildren('li') list: QueryList<HTMLElement>
  isSpecializationData = [];
  allComplete: boolean = false;
  isInputValueAddSpecializationData: string;
  skillForDelete: string;

  dataSpecialization = {
    skill: '',
    completed: false,
    subtasks: []
  };


  constructor(private formService: FormService, private adminService: AdminService) { }

  ngOnInit(): void {
    this.dataSpecialization = this.adminService.dataSpecialization;
  }


  updateAllComplete() {
    this.allComplete = this.dataSpecialization.subtasks != null && this.dataSpecialization.subtasks.every(t => t.completed);

  }

  someComplete(): boolean {
    if (this.dataSpecialization.subtasks == null) {

      return false;
    }

    return this.dataSpecialization.subtasks.filter(t => t.completed).length > 0 && !this.allComplete;
  }

  setAll(completed: boolean) {
    this.allComplete = completed;
    if (this.dataSpecialization.subtasks == null) {
      return;
    }

    this.dataSpecialization.subtasks.forEach(t => t.completed = completed);
  }

  addSpecialization() {
    this.dataSpecialization.subtasks.push({
      skill:
        this.isInputValueAddSpecializationData.charAt(0).toUpperCase() +
        this.isInputValueAddSpecializationData.slice(1)
      , completed: false
    });
    this.isInputValueAddSpecializationData = '';
  }

  deleteSpecialization(e: Event) {

    if (e.target["className"] === 'button_delete') {
      e.target['parentElement'].remove();

      this.skillForDelete = e.target['parentElement'].__ngContext__[26];

      this.dataSpecialization.subtasks = this.dataSpecialization.subtasks.filter(el => {
        return el['skill'] !== this.skillForDelete && el
      });
    }
  }


  saveChangesSpecializationData() {

    this.adminService.saveNewDataSpecialization(this.dataSpecialization);
    this.isSpecializationData = [];

    this.dataSpecialization.subtasks.forEach((el) => {
      if (el.completed) {
        this.isSpecializationData.push(el.skill)
      }
    });


    this.formService.postSpecializationData(this.isSpecializationData)
      .subscribe((data: any) => console.log(data),
        (error: Error) => console.log(error)
      );

  }

}
