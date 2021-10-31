import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RecruiterAssesmentComponent } from './recruiter-assesment.component';

describe('RecruiterAssesmentComponent', () => {
  let component: RecruiterAssesmentComponent;
  let fixture: ComponentFixture<RecruiterAssesmentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RecruiterAssesmentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RecruiterAssesmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
