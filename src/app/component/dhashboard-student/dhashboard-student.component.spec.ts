import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DhashboardStudentComponent } from './dhashboard-student.component';

describe('DhashboardStudentComponent', () => {
  let component: DhashboardStudentComponent;
  let fixture: ComponentFixture<DhashboardStudentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DhashboardStudentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DhashboardStudentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
