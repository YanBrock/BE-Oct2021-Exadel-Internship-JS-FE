import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InterviewerAssesmentComponent } from './interviewer-assesment.component';

describe('InterviewerAssesmentComponent', () => {
  let component: InterviewerAssesmentComponent;
  let fixture: ComponentFixture<InterviewerAssesmentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InterviewerAssesmentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InterviewerAssesmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
