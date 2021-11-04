import { Component } from '@angular/core';
// import { ThemePalette } from '@angular/material/core';


export interface Task {
  skill: string;
  completed: boolean;
  subtasks?: Task[];
}


@Component({
  selector: 'app-form-settings',
  templateUrl: './form-settings.component.html',
  styleUrls: ['./form-settings.component.scss']
})
export class FormSettingsComponent {

  task: Task = {
    skill: 'Specialization',
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
      {skill: 'С++', completed: false },
      {skill: 'Javascript', completed: false},
      {skill: '.Net', completed: false},
      {skill: 'Business analyst', completed: false },
      {skill: 'Java', completed: false},
      {skill: 'С++', completed: false}
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

}
