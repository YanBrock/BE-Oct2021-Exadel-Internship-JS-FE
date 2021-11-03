import { Component } from '@angular/core';
import { ThemePalette } from '@angular/material/core';


export interface Task {
  name: string;
  completed: boolean;
  color: ThemePalette;
  subtasks?: Task[];
}

@Component({
  selector: 'app-form-settings',
  templateUrl: './form-settings.component.html',
  styleUrls: ['./form-settings.component.scss']
})
export class FormSettingsComponent {

  task: Task = {
    name: 'Specialization',
    completed: false,
    color: 'primary',
    subtasks: [

      {name: 'Javascript', completed: false, color: 'primary'},
      {name: '.Net', completed: false, color: 'primary'},
      { name: 'Business analyst', completed: false, color: 'primary' },
      {name: 'Java', completed: false, color: 'primary'},
      {name: 'С++', completed: false, color: 'primary'},
      {name: 'PHP', completed: false, color: 'primary'}

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
