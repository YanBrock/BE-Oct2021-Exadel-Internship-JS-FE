import { Component } from '@angular/core';
import { FormService } from '../../services/form.service';

@Component({
  selector: 'app-form-settings',
  templateUrl: './form-settings.component.html',
  styleUrls: ['./form-settings.component.scss'],
  providers: [FormService],
})
export class FormSettingsComponent {

  constructor(private formService: FormService) { }
  isSpecializationData = [];

  task = {
    skill: 'All specialization',
    completed: false,
    subtasks: [
      {skill: 'Javascript', completed: false},
      {skill: '.Net', completed: false},
      {skill: 'Business analyst', completed: false },
      {skill: 'Java', completed: false},
      {skill: 'С++', completed: false},
      {skill: 'Javascript', completed: false},
      {skill: '.Net', completed: false},
      {skill: 'Business analyst', completed: false },
      {skill: 'Java', completed: false},
      {skill: 'С++', completed: false},
    ]
  };


  allComplete: boolean = false;

  updateAllComplete() {
    this.allComplete = this.task.subtasks != null && this.task.subtasks.every(t => t.completed);

  }

  someComplete(): boolean {
    if (this.task.subtasks == null) {

      return false;
    }

    return this.task.subtasks.filter(t => t.completed).length > 0 && !this.allComplete;
  }

  setAll(completed: boolean) {
    this.allComplete = completed;
    if (this.task.subtasks == null) {
      return;
    }

    this.task.subtasks.forEach(t => t.completed = completed);
  }

  saveChangesSpecializationData() {

    this.isSpecializationData = [];

    this.task.subtasks.forEach((el) => {
      if (el.completed) {
        this.isSpecializationData.push(el.skill)
      }
    });

    console.log(this.isSpecializationData);

    this.formService.postSpecializationData(this.isSpecializationData)
        .subscribe((data: any) => console.log(data),
          (error: Error) => console.log(error)
        );

  }

}
